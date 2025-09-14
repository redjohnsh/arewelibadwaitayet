import { createGunzip } from 'node:zlib';
import { Readable } from 'node:stream';
import { XMLParser } from 'fast-xml-parser';

const APPSTREAM_URL = 'https://dl.flathub.org/repo/appstream/x86_64/appstream.xml.gz';
const CIRCLE_APPS_URL = 'https://gitlab.gnome.org/Teams/Circle/-/raw/main/data/apps.json';

export interface AppstreamApp {
  id: string;
  name: string;
  summary: string;
}

export interface AppWithMetadata {
  id: string;
  name: string;
  desc: string;
  lang: string;
  circle?: boolean;
}

export interface CircleApp {
  app_id: string;
  added: string;
  last_review: string;
}

// Fetch circle apps data from GNOME Circle API
export async function fetchCircleApps(): Promise<Set<string>> {
  try {
    const response = await fetch(CIRCLE_APPS_URL);
    if (!response.ok) {
      console.warn('Failed to fetch circle apps, continuing without circle badges');
      return new Set();
    }
    
    const circleApps: CircleApp[] = await response.json();
    return new Set(circleApps.map(app => app.app_id));
  } catch (error) {
    console.warn('Error fetching circle apps:', error);
    return new Set();
  }
}

// Helper function to get app IDs from apps.ts
export function getAppIdsFromAppsMap(appsMap: Record<string, any>): Set<string> {
  return new Set(Object.keys(appsMap));
}

// Helper function to merge appstream data with language config and circle data
// Only includes apps that are found in AppStream data
export function mergeAppstreamData(
  appLanguages: Record<string, string>,
  appstreamData: Map<string, AppstreamApp>,
  circleApps: Set<string>
): Record<string, AppWithMetadata> {
  const result: Record<string, AppWithMetadata> = {};
  const missingApps: string[] = [];
  
  for (const [id, lang] of Object.entries(appLanguages)) {
    const appstreamApp = appstreamData.get(id);
    
    // Only include apps that have AppStream data
    if (appstreamApp) {
      result[id] = {
        id,
        name: appstreamApp.name,
        desc: appstreamApp.summary,
        lang: lang,
        circle: circleApps.has(id)
      };
    } else {
      missingApps.push(id);
    }
  }
  
  // Log missing apps for debugging
  if (missingApps.length > 0) {
    console.log(`Apps not found in AppStream data (${missingApps.length}):`);
    missingApps.forEach(appId => console.log(`  - ${appId}`));
  }
  
  return result;
}

// Main function to get enriched app data from appstream and circle data
export async function getEnrichedAppsData(appLanguages: Record<string, string>): Promise<Record<string, AppWithMetadata>> {
  const appIds = new Set(Object.keys(appLanguages));
  
  // Fetch data in parallel for better performance
  const [appstreamData, circleApps] = await Promise.all([
    fetchAndParseAppStream(appIds),
    fetchCircleApps()
  ]);
  
  const enrichedApps = mergeAppstreamData(appLanguages, appstreamData, circleApps);
  const includedCount = Object.keys(enrichedApps).length;
  const totalConfigured = Object.keys(appLanguages).length;
  
  console.log(`Included ${includedCount} apps out of ${totalConfigured} configured apps (${totalConfigured - includedCount} apps not found in AppStream)`);
  
  return enrichedApps;
}

export async function fetchAndParseAppStream(targetAppIds: Set<string>): Promise<Map<string, AppstreamApp>> {
  const response = await fetch(APPSTREAM_URL);

  if (!response.body) {
    throw new Error('Failed to fetch appstream');
  }

  // Convert Web ReadableStream to Node.js Readable stream
  const nodeStream = Readable.fromWeb(response.body as any);
  
  // Create gunzip transform stream
  const gunzip = createGunzip();
  
  // Collect the decompressed XML data
  const chunks: Buffer[] = [];
  
  return new Promise((resolve, reject) => {
    nodeStream
      .pipe(gunzip)
      .on('data', (chunk: Buffer) => {
        chunks.push(chunk);
      })
      .on('end', () => {
        try {
          const xmlString = Buffer.concat(chunks).toString('utf-8');
          const foundApps = extractAppsFromAppStream(xmlString, targetAppIds);
          console.log(`Found ${foundApps.size} apps in AppStream data out of ${targetAppIds.size} configured apps`);
          resolve(foundApps);
        } catch (error) {
          reject(new Error(`XML parsing error: ${error instanceof Error ? error.message : String(error)}`));
        }
      })
      .on('error', (error) => {
        reject(new Error(`Stream processing error: ${error.message}`));
      });
  });
}

// Extract app data from AppStream XML using fast-xml-parser
function extractAppsFromAppStream(xmlString: string, targetAppIds: Set<string>): Map<string, AppstreamApp> {
  const foundApps = new Map<string, AppstreamApp>();
  
  // Configure the XML parser
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    allowBooleanAttributes: true,
    parseTagValue: false,
    trimValues: true
  });

  try {
    const result = parser.parse(xmlString);
    
    // Navigate to components array - the root element is 'components' and contains 'component' children
    let components = result?.components?.component || 
                     result?.component || 
                     [];
    
    // If still empty, try to find components anywhere in the structure
    if (!components || (Array.isArray(components) && components.length === 0)) {
      const findComponents = (obj: any): any => {
        if (!obj || typeof obj !== 'object') return null;
        
        for (const [key, value] of Object.entries(obj)) {
          if (key === 'component' && value) {
            return value;
          }
          
          if (typeof value === 'object') {
            const found = findComponents(value);
            if (found) return found;
          }
        }
        return null;
      };
      
      const foundComponents = findComponents(result);
      if (foundComponents) {
        components = foundComponents;
      }
    }
    
    const componentsArray = Array.isArray(components) ? components : [components];
    
    let desktopAppCount = 0;
    let targetAppCount = 0;
    
    for (const component of componentsArray) {
      try {
        // Only process desktop applications (both 'desktop' and 'desktop-application' types)
        const componentType = component['@_type'];
        if (componentType !== 'desktop-application' && componentType !== 'desktop') continue;
        
        desktopAppCount++;
        
        // Extract app ID
        const appId = component.id;
        if (!appId) continue;
        
        // Check for exact match first
        if (targetAppIds.has(appId)) {
          // Exact match found
        } else if (appId.endsWith('.desktop') && targetAppIds.has(appId.replace('.desktop', ''))) {
          // Handle .desktop suffix mismatch
        } else {
          continue;
        }
        
        targetAppCount++;
        
        // Extract name (prefer non-localized version)
        let name = '';
        if (typeof component.name === 'string') {
          name = component.name;
        } else if (Array.isArray(component.name)) {
          // Find the name without xml:lang attribute (default/English)
          const defaultName = component.name.find((n: any) => !n['@_xml:lang']);
          name = defaultName || component.name[0];
          if (typeof name === 'object') {
            name = name['#text'] || '';
          }
        } else if (component.name && typeof component.name === 'object') {
          name = component.name['#text'] || '';
        }
        
        // Extract summary (prefer non-localized version)
        let summary = '';
        if (typeof component.summary === 'string') {
          summary = component.summary;
        } else if (Array.isArray(component.summary)) {
          // Find the summary without xml:lang attribute (default/English)
          const defaultSummary = component.summary.find((s: any) => !s['@_xml:lang']);
          summary = defaultSummary || component.summary[0];
          if (typeof summary === 'object') {
            summary = summary['#text'] || '';
          }
        } else if (component.summary && typeof component.summary === 'object') {
          summary = component.summary['#text'] || '';
        }
        
        
        // Only include apps with both name and summary
        if (name && summary) {
          // Use the original target ID (without .desktop suffix) for consistency
          const targetId = appId.endsWith('.desktop') ? appId.replace('.desktop', '') : appId;
          foundApps.set(targetId, {
            id: targetId,
            name: name.trim(),
            summary: summary.trim()
          });
        } else {
          console.warn(`App ${appId} found but missing name or summary (name: "${name}", summary: "${summary}")`);
        }
        
      } catch (error) {
        console.warn(`Error processing component: ${error}`);
        continue;
      }
    }
    
  } catch (error) {
    console.error('Error parsing XML with fast-xml-parser:', error);
    console.log('Falling back to regex-based parsing...');
    return extractAppsWithRegex(xmlString, targetAppIds);
  }
  
  // If we found very few apps, something might be wrong with the structure parsing
  if (foundApps.size < 200) {
    console.warn(`Only found ${foundApps.size} apps with fast-xml-parser, falling back to regex parsing...`);
    return extractAppsWithRegex(xmlString, targetAppIds);
  }
  
  return foundApps;
}

// Fallback parser using regex for malformed XML (kept as backup)
// Robust component parser that handles malformed XML in descriptions
function extractAppsWithRegex(xmlString: string, targetAppIds: Set<string>): Map<string, AppstreamApp> {
  const foundApps = new Map<string, AppstreamApp>();
  
  // Find component boundaries using regex (handle both 'desktop' and 'desktop-application' types)
  const componentRegex = /<component[^>]*type="desktop[^"]*"[^>]*>([\s\S]*?)<\/component>/g;
  let componentMatch;
  while ((componentMatch = componentRegex.exec(xmlString)) !== null) {
    const componentXml = componentMatch[1];
    
    try {
      // Extract basic metadata using targeted regex (avoid description parsing)
      const appId = extractElementText(componentXml, 'id');
      if (!appId) continue;
      
      // Check for exact match or .desktop suffix mismatch
      let targetId = appId;
      if (!targetAppIds.has(appId)) {
        if (appId.endsWith('.desktop') && targetAppIds.has(appId.replace('.desktop', ''))) {
          targetId = appId.replace('.desktop', '');
        } else {
          continue;
        }
      }
      
      const name = extractElementText(componentXml, 'name');
      const summary = extractElementText(componentXml, 'summary');
      
      
      if (name && summary) {
        foundApps.set(targetId, {
          id: targetId,
          name: name.trim(),
          summary: summary.trim()
        });
      } else if (targetAppIds.has(targetId)) {
        console.warn(`App ${targetId} found but missing name or summary (name: "${name}", summary: "${summary}")`);
      }
    } catch (error) {
      // Skip malformed components but continue processing
      console.warn(`Skipping malformed component: ${error}`);
      continue;
    }
  }
  
  return foundApps;
}

// Extract text from XML element, preferring plain text over internationalized versions
function extractElementText(xml: string, elementName: string): string | null {
  // First try to find element without xml:lang attribute (English/default)
  const plainRegex = new RegExp(`<${elementName}>([^<]+)</${elementName}>`, 'i');
  const plainMatch = xml.match(plainRegex);
  
  if (plainMatch) {
    return plainMatch[1].trim();
  }
  
  // Fallback: find any element with this name (may have xml:lang)
  const anyRegex = new RegExp(`<${elementName}[^>]*>([^<]+)</${elementName}>`, 'i');
  const anyMatch = xml.match(anyRegex);
  
  if (anyMatch) {
    return anyMatch[1].trim();
  }
  
  // Additional fallback: handle self-closing tags or whitespace variations
  const selfClosingRegex = new RegExp(`<${elementName}[^>]*\\s*/>`, 'i');
  if (selfClosingRegex.test(xml)) {
    return null; // Self-closing tag with no content
  }
  
  // Handle multiline or whitespace variations
  const multilineRegex = new RegExp(`<${elementName}[^>]*>\\s*([\\s\\S]*?)\\s*</${elementName}>`, 'i');
  const multilineMatch = xml.match(multilineRegex);
  
  if (multilineMatch) {
    const content = multilineMatch[1].trim();
    return content || null;
  }
  
  return null;
}
