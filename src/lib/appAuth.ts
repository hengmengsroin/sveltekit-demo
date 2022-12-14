import { SvelteKitAuth } from 'sk-auth';
import { FacebookOAuth2Provider, GoogleOAuth2Provider } from 'sk-auth/providers';

export const appAuth = new SvelteKitAuth({
	providers: [
		new GoogleOAuth2Provider({
			clientId: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID,
			clientSecret: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_SECRET,
			profile(profile) {
				return { ...profile, provider: 'google' };
			}
		}),

		new FacebookOAuth2Provider({
			clientId: import.meta.env.VITE_FACEBOOK_OAUTH_CLIENT_ID,
			clientSecret: import.meta.env.VITE_FACEBOOK_OAUTH_CLIENT_SECRET,
			profile(profile) {
				return { ...profile, provider: 'facebook' };
			}
		})
	],
	callbacks: {
		jwt(token, profile) {
			if (profile?.provider) {
				const { provider, ...account } = profile;
				token = {
					...token,
					user: {
						...(token.user ?? {}),
						connections: { ...(token.user?.connections ?? {}), [provider]: account }
					}
				};
			}

			return token;
		}
	},
	jwtSecret: import.meta.env.VITE_JWT_SECRET_KEY
});
