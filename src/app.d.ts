// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	type CollectionModel = { _id: string; name: string; thumbnail: string; services: string[] };
	type ContactUsData = {
		email: string;
		fullname: string;
		phone_number: string;
		subject: string;
		message?: string;
	};
	type IUser = {
		access_token: string;
		email: string;
		first_name: string;
		image: string;
		last_name: string;
		login_method: string;
		name: string;
		refresh_token: string;
		refresh_token_expires_at: number;
		role: IRole;
		token_expires_at: number;
		user_id: string;
	};

	type IRole = {
		_id: string;
		name: string;
	};
}
declare namespace App {
	interface Locals {
		user: {
			_id: string;
			token: string;
			role: string;
		};
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
	interface CollectionModel {
		_id: string;
		name: string;
		thumbnail: string;
		services: string[];
	}

	interface SelectedOption {
		choice: {
			_id: string;
			name: string;
			price: number;
			start_date?: string;
			end_date?: string;
		};
		option: {
			_id: string;
			name: string;
		};
		quantity: number;
	}

	interface OrderData {
		used_date: string;
		service: string;
		payment_info?: {
			email: string;
			first_name: string;
			last_name: string;
			phone_number: string;
		};
		order_items?: Array<any>;
		remark?: string;
		client_request_info?: any;
		expired_date?: string;
		custom_questions?: string;
		voucher?: string;
		amount_people?: number;
		pickup_info?: {
			lat: number;
			long: number;
			address: string;
			hotel: string;
			room: string;
		};
		tourist?: string;
	}

	interface LocationData {
		formatted_address: string;
		lat: number;
		lng: number;
	}

	interface PositionData {
		lat: number;
		lng: number;
	}

	interface ContactUsData {
		email: string;
		fullname: string;
		phone_number: string;
		subject: string;
		message?: string;
	}
	interface IUser {
		access_token: string;
		email: string;
		first_name: string;
		image: string;
		last_name: string;
		login_method: string;
		name: string;
		refresh_token: string;
		refresh_token_expires_at: number;
		role: IRole;
		token_expires_at: number;
		user_id: string;
	}

	interface IRole {
		_id: string;
		name: string;
	}
}
