import { env } from '$env/dynamic/public';
import { Plausible } from 'plausible-client';

export const plausible = new Plausible({
	apiHost: env.PUBLIC_PLAUSIBLE_API_HOST,
	domain: 'arewelibadwaitayet.com',
	filter(event) {
		if (event.url.includes('localhost')) {
			return false;
		}

		return true;
	}
});
