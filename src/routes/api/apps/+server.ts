import { json } from '@sveltejs/kit';
import { APP_LANGUAGES } from '$lib/apps';

export function GET() {
    return json(APP_LANGUAGES);
}