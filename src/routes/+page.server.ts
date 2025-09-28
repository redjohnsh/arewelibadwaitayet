import type { PageServerLoad } from './$types';
import { createAppList, getEditorsChoice } from '$lib/apps.server';
import type { SerializableApp } from '$lib/apps';

export const prerender = true;

// Cache for development to avoid re-fetching expensive appstream data
let cachedAppList: SerializableApp[] | null = null;
let cachedEditorsChoice: SerializableApp[] | null = null;

export const load: PageServerLoad = async () => {
	// Use cache in development, always fetch fresh in production builds
	if (cachedAppList && cachedEditorsChoice && import.meta.env.DEV) {
		console.log('📦 Using cached app data (development)');
		return {
			appList: cachedAppList,
			editorsChoice: cachedEditorsChoice
		};
	}

	console.log('🚀 Fetching fresh app data...');

	// Single fetch of enriched data at build time
	const appList = await createAppList();
	const editorsChoice = getEditorsChoice(appList);

	// Cache for development
	if (import.meta.env.DEV) {
		cachedAppList = appList;
		cachedEditorsChoice = editorsChoice;
		console.log(`💾 Cached ${appList.length} apps for development`);
	}

	console.log(`✅ Loaded ${appList.length} apps, ${editorsChoice.length} editors choice`);

	const categories = [...new Set(appList.map((app) => app.categories).flat())];

	return {
		appList,
		editorsChoice,
		categories
	};
};
