import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, route, fetch, data }) => {
	return {
		user: {
			first_name: 'Mengsroin',
			last: 'Heng',
			gender: 'M'
		}
	};
};
