export interface IAttraction {
	province: Merchant;
	_id: string;
	thumbnails: string[];
	name: string;
	location: Location;
	merchant: Merchant;
	is_opening: boolean;
	type: string;
	discount: number;
	skus: Skus[];
	overall_rating: number;
	review: Review;
	price: IPrice;
	faqs: any[];
	is_favorite: boolean;
	is_interested: boolean;
}

export interface Location {
	lat: number;
	long: number;
}

export interface Merchant {
	_id: string;
	name: string;
}

export interface IPrice {
	sale_price: number | null;
	old_sale_price: number | null;
}

export interface Review {
	overall: number;
	total_reviews: number;
}

export interface Skus {
	_id: string;
	local_price: ForeignPriceClass;
	foreign_price: ForeignPriceClass;
	status: string;
	old_price: number;
}

export interface ForeignPriceClass {
	kid: number;
	adult: number;
}
