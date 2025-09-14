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
	"com.jeffser.Alpaca",
	"io.bassi.Amberol",
	"org.gnome.gitlab.somas.Apostrophe", 
	"com.belmoussaoui.Authenticator",
	"net.natesales.Aviator",
	"com.rafaelmardojai.Blanket",
	"dev.geopjr.Calligraphy",
	"com.github.huluti.Curtail",
	"com.belmoussaoui.Decoder",
	"com.mattjakeman.ExtensionManager",
	"com.github.finefindus.eyedropper",
	"com.github.ADBeveridge.Raider",
	"com.mardojai.ForgeSparks",
	"de.haeckerfelix.Fragments",
	"be.alexandervanhee.gradia",
	"io.gitlab.adhami3310.Impression",
	"garden.jamie.Morphosis",
	"io.github.seadve.Mousai",
	"io.gitlab.news_flash.NewsFlash",
	"io.github.nozwock.Packet",
	"org.nickvision.tubeconverter",
	"org.gnome.World.PikaBackup",
	"io.github.alainm23.planify",
	"com.github.marhkb.Pods",
	"net.nokyan.Resources",
	"org.gnome.World.Secrets",
	"io.gitlab.adhami3310.Converter",
	"dev.geopjr.Tuba",
	"io.gitlab.theevilskeleton.Upscaler"
];

// Simple filter function for editors choice (works with plain arrays)
export function getEditorsChoice(appList: SerializableApp[]): SerializableApp[] {
	return appList.filter((app) => EDITORS_CHOICE_IDS.includes(app.id));
}
