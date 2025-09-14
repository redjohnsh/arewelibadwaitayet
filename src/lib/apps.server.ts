// Server-side app data processing
// This file should only be imported in server contexts (like +page.ts load functions)

import { getEnrichedAppsData } from "./appstream.server";
import { APP_LANGUAGES, type SerializableApp } from "./apps";

// Build-time function to create the enriched app list (returns plain array for serialization)
export async function createAppList(): Promise<SerializableApp[]> {
	const enrichedApps = await getEnrichedAppsData(APP_LANGUAGES);
	return Object.values(enrichedApps);
}

const EDITORS_CHOICE_IDS = [
	"de.haeckerfelix.Fragments",
	"org.gnome.gitlab.somas.Apostrophe", 
	"net.natesales.Aviator",
	"io.github.alainm23.planify",
	"org.nickvision.tubeconverter",
	"com.github.finefindus.eyedropper",
];

// Simple filter function for editors choice (works with plain arrays)
export function getEditorsChoice(appList: SerializableApp[]): SerializableApp[] {
	return appList.filter((app) => EDITORS_CHOICE_IDS.includes(app.id));
}
