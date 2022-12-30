import type { IPrice } from './attraction.model';

export interface IServiceDetail {
	province: Province;
	_id: string;
	name: string;
	description: string;
	advanced_booking: boolean;
	advanced_booking_duration: AdvancedBookingDuration;
	photos: string[];
	thumbnails: string[];
	holidays: any[];
	opening_days_hours: OpeningDaysHour[];
	is_opening: boolean;
	overview: Overview;
	status: string;
	merchant: Merchant;
	destination: null;
	source: null;
	location: Location;
	categories: Category[];
	summary: Summary[];
	open_times: string;
	accessibility: string;
	short_description: string;
	included_pass: boolean;
	pass_type: string;
	has_pickup: boolean;
	time_slots: TimeSlot[];
	special_field: string;
	serving_status: string;
	type: string;
	discount: number;
	interested_tourists: any[];
	descriptive_images: any[];
	custom_questions: null;
	direct_booking_only: boolean;
	covidfree: null;
	overall_rating: OverallRating;
	review: OverallRating;
	interested_count: number;
	updatedAt: string;
	createdAt: string;
	skus: any[];
	price: IPrice;
	faqs: any[];
	is_favorite: boolean;
	is_interested: boolean;
	can_book: boolean;
}

export interface AdvancedBookingDuration {
	days: number;
	hours: number;
	minutes: number;
}

export interface Category {
	_id: string;
	description: string;
	services: string[];
	name: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface Location {
	lat: number;
	long: number;
}

export interface Merchant {
	_id: string;
	name: string;
	description: string;
	address: string;
	website: string;
	phone_number: string;
	location: string;
	status: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	logo: string;
	overall_rating: number;
}

export interface OpeningDaysHour {
	day: number;
	status: string;
	hour: Hour;
}

export interface Hour {
	from: string;
	to: string;
}

export interface OverallRating {
	overall: number;
	total_reviews: number;
}

export interface Overview {
	detail: string;
	additional_info: string;
	cr_policy: string;
}

export interface Province {
	_id: string;
	name: string;
}

export interface Summary {
	_id: string;
	icon: Icon;
	content: string;
}

export interface Icon {
	name: string;
	icon: string;
	status: string;
	_id: string;
}

export interface TimeSlot {
	_id: string;
	start_time: string;
	end_time: string;
}
