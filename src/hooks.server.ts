import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get('session');

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}
	// find the user based on the session
	const credential = JSON.parse(session);

	// if `user` exists set `events.local`
	if (credential) {
		event.locals.user = {
			token: credential.token,
			role: credential.role,
			_id: credential._id
		};
	}

	// load page as normal
	return await resolve(event);
};
