import { PUBLIC_PLAUSIBLE_API_HOST } from '$env/static/public';
import { Plausible } from 'plausible-client';

export const plausible = new Plausible({
	apiHost: PUBLIC_PLAUSIBLE_API_HOST,
	domain: 'arewelibadwaitayet.com',
	filter(event) {
		if (event.url.includes('localhost')) {
			return false;
		}

		return true;
	}
});
