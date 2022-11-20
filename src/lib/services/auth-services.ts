import { postRequest } from './base-request';
export class AuthServices {
	public loginWithEmail = async (email: string, password: string): Promise<any> => {
		return postRequest(`/auth`, { email, password }, 'post');
	};

	public loginWithFacebook = async (profileId: string, accessToken: string): Promise<any> => {
		const body = {
			id: profileId,
			access_token: accessToken,
			platform: 'wep_app'
		};
		return postRequest(`/auth/facebook`, body, 'post');
	};

	public loginWithGoogle = async (idToken: string): Promise<any> => {
		const body = {
			id_token: idToken,
			platform: 'wep_app'
		};
		return postRequest(`/auth/google`, body, 'post');
	};
}
