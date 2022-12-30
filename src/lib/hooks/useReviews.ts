import { useQuery } from '@sveltestack/svelte-query';
import { apiHelper } from '../services/api-helper';

interface IQuery {
	serviceId: string;
	count?: number;
	page?: number;
}

const useReviews = ({ serviceId, count, page }: IQuery) =>
	useQuery(
		['reviews', serviceId, count, page],
		() => apiHelper.getReviews(serviceId, count, page),
		{
			refetchOnWindowFocus: false
		}
	);

export default useReviews;
