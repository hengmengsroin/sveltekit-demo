import axios from 'axios';
import { PUBLIC_BASE_URL } from '$env/static/public';
const apiClient = axios.create({ baseURL: PUBLIC_BASE_URL + '/v1' });
const apiClientV2 = axios.create({ baseURL: PUBLIC_BASE_URL + '/v2' });

async function postRequest(
	url: string,
	data: any,
	method?: string,
	token: string | undefined = undefined
) {
	let res: any = null;
	let authorization = '';
	if (token) {
		authorization = 'Bearer ' + token;
	}
	// console.log({ authorization });

	const headers = { Authorization: authorization };
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

async function postRequestForQr(
	url: string,
	data: any,
	method?: string,
	token: string | undefined = undefined
) {
	let res: any = null;
	let authorization = '';
	if (token) {
		authorization = 'Bearer ' + token;
	}
	const headers = { Authorization: authorization };
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

async function postRequestV2(
	url: string,
	data: any,
	method?: string,
	token: string | undefined = undefined
) {
	let res: any = null;
	let authorization = '';
	if (token) {
		authorization = 'Bearer ' + token;
	}
	const headers = { Authorization: authorization };
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

async function getRequest(
	url: string,
	params?: any,
	method = 'get',
	token: string | undefined = undefined
) {
	let res: any = null;
	let authorization = '';
	if (token) {
		authorization = 'Bearer ' + token;
	}
	const headers = { Authorization: authorization };
	const option = {
		headers: headers,
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
	token: string | undefined = undefined
) {
	let res: any = null;
	let authorization = '';
	if (token) {
		authorization = 'Bearer ' + token;
	}
	const headers = { Authorization: authorization };
	const option = {
		headers: headers,
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

async function getRequestV2(
	url: string,
	params?: any,
	method = 'get',
	token: string | undefined = undefined
) {
	let res: any = null;
	let authorization = '';
	if (token) {
		authorization = 'Bearer ' + token;
	}
	const headers = { Authorization: authorization };
	const option = {
		headers: headers,
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
