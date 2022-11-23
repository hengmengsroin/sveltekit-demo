import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	// we only use this endpoint for the api
	// and don't need to see the page
	throw redirect(302, '/');
};

export const actions: Actions = {
	default({ cookies }) {
		console.log('delete the session');
		cookies.delete('session');

		// redirect the user
		throw redirect(302, '/login');
	}
};
