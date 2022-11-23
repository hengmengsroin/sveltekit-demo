import { apiHelper } from '$lib/services/api-helper';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const id = slug.split('-')[0];
	try {
		const result = await apiHelper.service.getOne(id);
		return {
			service: result
		};
	} catch (err) {
		throw error(404, 'Not found');
	}
};
