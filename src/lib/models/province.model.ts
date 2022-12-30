export interface IProvince {
	city_center: CityCenter;
	_id: string;
	status: string;
	thumbnail: string;
	country: Country;
	name: string;
	createdAt: Date;
	updatedAt: Date;
	kh_name: string;
}

export interface CityCenter {
	lat: number;
	long: number;
}

export interface Country {
	_id: string;
	name: string;
	status: string;
	thumbnail: string;
}
