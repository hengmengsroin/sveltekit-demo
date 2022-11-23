import { apiHelper } from '$lib/services/api-helper';
import { invalid, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/');
	}
	return {};
};

const login: Action = async ({ cookies, request }) => {
	const data = await request.formData();
	const username = data.get('email');
	const password = data.get('password');

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		return invalid(400, { invalid: true });
	}
	// generate new auth token just in case
	let hasError = false;
	const credential: {
		_id: string;
		token: string;
		role: string;
	} = { _id: '', role: '', token: '' };
	let maxAge = 0;
	try {
		const authenticatedUser = await apiHelper.loginWithEmail({ email: username, password });
		credential._id = authenticatedUser._id;
		credential.token = authenticatedUser.token;
		credential.role = authenticatedUser.role.name;
		maxAge = authenticatedUser.expiresAt;
	} catch (error) {
		hasError = true;
	}
	if (hasError) {
		return invalid(400, { credentials: true });
	}
	cookies.set('session', JSON.stringify(credential), {
		// send cookie for every page
		path: '/',
		// server side only cookie so you can't use `document.cookie`
		httpOnly: true,
		// only requests from same site can send cookies
		// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
		sameSite: 'strict',
		// only sent over HTTPS in production
		secure: process.env.NODE_ENV === 'production',
		// set cookie to expire after a month
		maxAge: maxAge
	});

	// redirect the user
	throw redirect(302, '/');
};
export const actions: Actions = { login };
