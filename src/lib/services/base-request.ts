import { browser } from '$app/environment';
import axios from 'axios';
import LocalAuthServices from './local-auth-services';
const baseUrl = process.env.BASE_URL;
const apiClient = axios.create({ baseURL: baseUrl + '/v1' });
const apiClientV2 = axios.create({ baseURL: baseUrl + '/v2' });

async function postRequest(url: string, data: any, method?: string, withToken = false) {
	let res: any = null;
	let authorization = 'Bearer ';
	if (browser && localStorage) {
		authorization += LocalAuthServices.getToken();
	}

	const headers = { Authorization: withToken ? authorization : '' };
	switch (method) {
		case 'put':
			res = await apiClient.put(url, data, {
				headers: headers
			});
			break;
		case 'patch':
			res = await apiClient.patch(url, data, {
				headers: headers
			});
			break;
		default:
			res = await apiClient.post(url, data, {
				headers: headers
			});
	}

	const result = res.data;
	if (result.code == 1) {
		return result.data;
	} else {
		throw result.message;
	}
}

async function postRequestForQr(url: string, data: any, method?: string, withToken = false) {
	let res: any = null;
	let authorization = 'Bearer ';
	if (browser && localStorage) {
		authorization += LocalAuthServices.getToken();
	}

	const headers = { Authorization: withToken ? authorization : '' };
	switch (method) {
		case 'put':
			res = await apiClient.put(url, data, {
				headers: headers
			});
			break;
		case 'patch':
			res = await apiClient.patch(url, data, {
				headers: headers
			});
			break;
		default:
			res = await apiClient.post(url, data, {
				headers: headers
			});
	}

	const result = res.data;

	if (result.code == 0 || result.code == 1) {
		return result.data;
	} else {
		throw result.message;
	}
}

async function postRequestV2(url: string, data: any, method?: string, withToken = false) {
	let res: any = null;
	let authorization = 'Bearer ';
	if (browser && localStorage) {
		authorization += LocalAuthServices.getToken();
	}
	const headers = { Authorization: withToken ? authorization : '' };
	switch (method) {
		case 'put':
			res = await apiClientV2.put(url, data, {
				headers: headers
			});
			break;
		case 'patch':
			res = await apiClientV2.patch(url, data, {
				headers: headers
			});
			break;
		default:
			res = await apiClientV2.post(url, data, {
				headers: headers
			});
	}

	const result = res.data;
	if (result.code == 1) {
		return result.data;
	} else {
		throw result.message;
	}
}

async function getRequest(url: string, params?: any, method = 'get', withToken = false) {
	let res: any = null;
	// console.log("params", params);
	let authorization = 'Bearer ';
	if (browser && localStorage) {
		authorization += LocalAuthServices.getToken();
	}
	const headers = { Authorization: authorization };
	const option = {
		headers: withToken ? headers : {},
		params: params
	};
	switch (method) {
		case 'delete':
			res = await apiClient.delete(url, option);
			break;
		default:
			res = await apiClient.get(url, option);
	}

	const result = res.data;

	if (result.code == 1) {
		if (result.pagination) {
			return {
				data: result.data,
				pagination: result.pagination
			};
		}
		return result.data;
	} else {
		throw result.message;
	}
}

async function getRequestForHTMLResponse(
	url: string,
	params?: any,
	method = 'get',
	withToken = false
) {
	let res: any = null;
	// console.log("params", params);
	let authorization = 'Bearer ';
	if (browser && localStorage) {
		authorization += LocalAuthServices.getToken();
	}
	const headers = { Authorization: authorization };
	const option = {
		headers: withToken ? headers : {},
		params: params
	};
	switch (method) {
		case 'delete':
			res = await apiClient.delete(url, option);
			break;
		default:
			res = await apiClient.get(url, option);
	}
	if (res.status == 200) {
		return res.data;
	} else {
		throw res.message;
	}
}

async function getRequestV2(url: string, params?: any, method = 'get', withToken = false) {
	let res: any = null;
	// console.log("params", params);
	let authorization = 'Bearer ';
	if (browser && localStorage) {
		authorization += LocalAuthServices.getToken();
	}
	const headers = { Authorization: authorization };
	const option = {
		headers: withToken ? headers : {},
		params: params
	};
	switch (method) {
		case 'delete':
			res = await apiClientV2.delete(url, option);
			break;
		default:
			res = await apiClientV2.get(url, option);
	}

	const result = res.data;
	if (result.code == 1) {
		return result.data;
	} else {
		throw result.message;
	}
}

export {
	postRequest,
	postRequestForQr,
	postRequestV2,
	getRequest,
	getRequestV2,
	getRequestForHTMLResponse
};
