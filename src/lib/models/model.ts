export interface CollectionModel {
  _id: string;
  name: string;
  thumbnail: string;
  services: string[];
}

export interface SelectedOption {
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

export interface OrderData {
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

export interface LocationData {
  formatted_address: string;
  lat: number;
  lng: number;
}

export interface PositionData {
  lat: number;
  lng: number;
}

export interface ContactUsData {
  email: string;
  fullname: string;
  phone_number: string;
  subject: string;
  message?: string;
}
export interface IUser {
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

export interface IRole {
  _id: string;
  name: string;
}
