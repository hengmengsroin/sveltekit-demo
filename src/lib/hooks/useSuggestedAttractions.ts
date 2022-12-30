import type { IAttraction } from '$lib/models/attraction.model';
import { useQuery } from '@sveltestack/svelte-query';
import { apiHelper } from '../services/api-helper';

type UseCollectionsQuery = {
	provinceId?: string;
	userId?: string;
};

const useSuggestedAttractions = ({ provinceId, userId }: UseCollectionsQuery) =>
	useQuery<IAttraction[]>(
		['featuringList', { provinceId, userId }],
		() => apiHelper.getFeaturingPosts(provinceId, userId),
		{
			refetchOnWindowFocus: false,
			refetchOnMount: false
		}
	);

export default useSuggestedAttractions;
