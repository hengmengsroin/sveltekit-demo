import type { IAttraction } from '$lib/models/attraction.model';
import type { IResponse } from '$lib/models/res.model';
import { useQuery } from '@sveltestack/svelte-query';
import { apiHelper } from '../services/api-helper';

interface UseAllAttractionQuery {
	minPrice?: number;
	maxPrice?: number;
	search?: string;
	province?: string;
	count?: number;
	page?: number;
	type?: string;
	services?: string[];
	genre?: string;
}

const useAllAttractions = ({
	minPrice,
	maxPrice,
	search,
	province,
	count,
	page,
	type,
	genre,
	services
}: UseAllAttractionQuery) =>
	useQuery<IResponse<IAttraction>>(
		[
			'popularSearch',
			{
				minPrice,
				maxPrice,
				search,
				province,
				count,
				page,
				type,
				services,
				genre
			}
		],
		() =>
			apiHelper.service.getAll(
				minPrice,
				maxPrice,
				page,
				count,
				province,
				search,
				services,
				type,
				genre
			),
		{
			refetchOnWindowFocus: false,
			refetchOnMount: false
		}
	);

export default useAllAttractions;
