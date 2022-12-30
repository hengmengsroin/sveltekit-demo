import type { IProvince } from '$lib/models/province.model';
import type { IResponse } from '$lib/models/res.model';
import { useQuery } from '@sveltestack/svelte-query';

import { apiHelper } from '../services/api-helper';

const useProvinces = () =>
	useQuery<IResponse<IProvince>>(['provinces'], () => apiHelper.getProvinces(), {
		refetchOnWindowFocus: false,
		refetchOnMount: true
	});

export default useProvinces;
