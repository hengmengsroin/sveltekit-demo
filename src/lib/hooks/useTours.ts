import { useQuery } from '@sveltestack/svelte-query';
import { apiHelper } from '../services/api-helper';

interface IQuery {
	provinceId: string;
	count?: number;
	page?: number;
	minPrice?: number;
	maxPrice?: number;
	services?: string[];
	search?: string;
}

const useTours = ({ provinceId, count, page, minPrice, maxPrice, services, search }: IQuery) =>
	useQuery(
		['tours', provinceId, count, page, minPrice, maxPrice, services, search],
		() => apiHelper.getTourList(provinceId, minPrice, maxPrice, page, count, search, services),
		{
			refetchOnWindowFocus: false,
			refetchOnMount: false
		}
	);

export default useTours;
