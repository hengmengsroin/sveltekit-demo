import type { IAttraction } from '$lib/models/attraction.model';
import type { IResponse } from '$lib/models/res.model';
import { useQuery } from '@sveltestack/svelte-query';

import { apiHelper } from '../services/api-helper';

const useRecentViewedAttractions = (token: string) =>
	useQuery<IResponse<IAttraction>>(
		['RecentViewedAttractions'],
		() => apiHelper.getRecentViewedAttractions(token),
		{
			refetchOnWindowFocus: false
		}
	);

export default useRecentViewedAttractions;
