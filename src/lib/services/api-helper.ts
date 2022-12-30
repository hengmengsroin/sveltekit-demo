import type { ContactUsData } from '$lib/models/model';
import type { IServiceDetail } from '$lib/models/service_detail.model';
import {
	getRequest,
	getRequestForHTMLResponse,
	getRequestV2,
	postRequest,
	postRequestForQr,
	postRequestV2
} from './base-request';

export const apiHelper = {
	search: {
		getPopularSearch: async () => {
			const result = await getRequest('top_search', {});
			return result;
		},
		getPopularAttraction: async () => {
			const result = await getRequest('services/top_10_viewed', {});
			return result;
		}
	},
	service: {
		getOne: async (id: string) => {
			const result: IServiceDetail = await getRequest(`services/mobile/${id}`);
			result.can_book = false;
			if (result.is_opening) {
				result.can_book = true;
				if (result.price) {
					if (result.price.sale_price) {
						result.can_book = result.price.sale_price !== 0;
					} else {
						result.can_book = false;
					}
				} else {
					result.can_book = false;
				}
				if (result.can_book) {
					result.can_book = !result.direct_booking_only;
				}
			}
			if (result.serving_status !== 'open') {
				result.can_book = false;
			}
			return result;
		},
		getAll: async (
			minPrice = 0,
			maxPrice = 100000000000000,
			page = 1,
			count = 21,
			province?: string,
			search?: string,
			services: string[] = [],
			type?: string,
			genre?: string
		) => {
			const query = {
				'price[gte]': minPrice,
				'price[lte]': maxPrice,
				page: page,
				count: count,
				province: province,
				search: search,
				services: services,
				type: type,
				genre
			};

			return getRequest('services/mobile', query);
		},
		option_content: async (id: any) => {
			const option = await getRequestV2(`services/${id}/option_content/mobile`);
			return option;
		},

		add_reservation: async (body: any, type: any) => {
			let url = '';
			if (type == 'tour') {
				url = 'service_orders/tour';
			} else if (type == 'service') {
				url = 'service_orders';
			} else if (type == 'restaurant') {
				url = 'service_orders/restaurant';
			}
			const reservation = await postRequestV2(url, body);
			return reservation;
		},
		proceed_checkout: async (reservationId: string) => {
			const url = `service_orders/checkout/${reservationId}?player_id=playId`;
			const data = {
				responseType: 'text'
			};
			const checkout = await getRequestForHTMLResponse(url, data);
			return checkout;
		}
	},
	getCollections: async (provinceId?: string) => {
		const result = await getRequest('collections/mobile', {
			province: provinceId
		});
		return result;
	},
	getOneCollection: async (id: string) => {
		const result = await getRequest(`collections/${id}`);
		return result;
	},
	getFeaturingPosts: async (provinceId?: string, userId?: string) => {
		const result = await postRequest('me/suggested_trending_attraction', {
			province: provinceId,
			user_id: userId
		});
		return result;
	},
	getTourList: async (
		province?: string,
		minPrice = 0,
		maxPrice = 100000000000000,
		page = 1,
		count = 21,
		search?: string,
		services: any[] = []
	) => {
		const result = await getRequest('services/mobile', {
			province: province,
			type: 'tour',
			page: page,
			count: count,
			price: {
				gte: minPrice,
				lte: maxPrice
			},
			search: search,
			services: services
		});
		return result;
	},
	getPromotionSlides: async (provinceId?: string) => {
		const result = await getRequest('featured_slides', {
			province: provinceId,
			with_promotion: 1,
			with_angkor: 1
		});
		return result;
	},
	getReviews: async (serviceId: string, count = 5, page = 1) => {
		const result = await getRequest(`ratings`, {
			service: serviceId,
			count: count,
			page: page
		});
		return result;
	},
	getProvinces: async () => {
		const result = await getRequest('provinces/mobile');
		result.data.unshift({
			_id: 'all',
			name: 'All',
			thumbnail:
				'https://cdn.britannica.com/49/94449-050-ECB0E7C2/Angkor-Wat-temple-complex-Camb.jpg'
		});
		return result;
	},
	getServiceSuggestion: async (serviceId: string) => {
		const result = await getRequest(`services/mobile/${serviceId}/suggestion`, {});
		return result;
	},
	getOneTourist: async (id: string, token: string) => {
		const result = await getRequest(`tourists/${id}`, {}, 'get', token);
		return result;
	},
	getAllTouristsMobile: async (name = '', token: string) => {
		const result = await getRequest(`tourists/mobile?name=${name}`, {}, 'get', token);
		return result;
	},
	updateTouristProfile: async (id: string, data: any, token: string) => {
		const result = await postRequest(`tourists/${id}`, data, 'patch', token);
		return result;
	},
	getMyTickets: async (id: string) => {
		const result: any[] = await getRequest(`tourists/my_tickets/${id}/valid`, {
			new_app: 1,
			status: ['paid', 'confirmed', 'used']
		});
		const ticket: any = {};
		result.forEach((item: any) => {
			if (ticket[item.type]) {
				ticket[item.type].push(item);
			} else {
				ticket[item.type] = [item];
			}
		});
		return ticket;
	},
	// voucher section...................
	getMyValidVouchers: async (params: any, token: string) => {
		const result = await getRequest('me/my_valid_vouchers', params, 'get', token);
		return result;
	},

	getMyExpiredVouchers: async (params: any, token: string) => {
		const result = await getRequest('me/my_expired_vouchers', params, 'get', token);
		return result;
	},

	applyVoucherCode: async (params: any, token: string) => {
		const result = await getRequest('vouchers/apply', params, 'get', token);
		return result;
	},

	// affiliate programme...................................................
	getAffiliateProgram: async (params: any, token: string) => {
		const result = await getRequest('me/my_referral_program', params, 'get', token);
		return result;
	},

	joinReferralProgram: async (token: string) => {
		const result = await getRequest('me/join_referral_program', {}, 'get', token);
		return result;
	},

	// reward.................................
	getMyReward: async (params: any, token?: string) => {
		const result = getRequest('me/my_rewards', params, 'get', token);
		return result;
	},

	transferPoint: async (point: number, userId: string, token: string) => {
		const result = postRequest(
			'tourists/transfer_point',
			{
				amount_points: point,
				receiver_id: userId
			},
			'post',
			token
		);
		return result;
	},

	// enquiry.................................
	addContactUs: async (params: ContactUsData, token: string) => {
		const result = await postRequest('enquiries', params, 'post', token);
		return result;
	},

	changePassword: async (userId: string, params: any, token: string) => {
		const result = await postRequest(`users/${userId}/change_pwd`, params, 'patch', token);
		return result;
	},

	loginWithEmail: async (params: { email: string; password: string }) => {
		const result = await postRequest(`/auth`, params, 'post');
		return result;
	},

	loginWithFacebook: async (params: { profile_id: string; access_token: string }) => {
		const body = {
			id: params.profile_id,
			access_token: params.access_token,
			platform: 'wep_app'
		};
		const result = await postRequest(`/auth/facebook`, body, 'post');
		return result;
	},

	loginWithGoogle: async (idToken: string) => {
		const body = {
			id_token: idToken,
			platform: 'wep_app'
		};
		const result = await postRequest(`/auth/google`, body, 'post');
		return result;
	},

	getQRCode: async () => {
		const result = await postRequest(`/auth/get-qrcode`, {}, 'post');
		return result;
	},

	checkQRCode: async (body: { qrcode: string }) => {
		const result = await postRequestForQr('/auth/qrcode', body, 'post');
		return result;
	},

	getMyFavoriteAttractions: async (token: string) => {
		const result = getRequest('me/favorite_attractions', {}, 'get', token);
		return result;
	},

	getRecentViewedAttractions: async (token: string) => {
		const result = getRequest('/me/recently_viewed_attractions', {}, 'get', token);
		return result;
	}
};
