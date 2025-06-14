import { Plausible } from 'plausible-client';

export const plausible = new Plausible({
	apiHost: 'https://analytics.arewelibadwaitayet.com',
	domain: 'arewelibadwaitayet.com',
	filter(event) {
		if (event.url.includes('localhost')) {
			return false;
		}

		return true;
	}
});
