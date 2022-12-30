import { useQuery } from '@sveltestack/svelte-query';
import { apiHelper } from '../services/api-helper';

const usePopularAttractions = () =>
	useQuery(['popularAttraction'], queryFn, {
		refetchOnWindowFocus: false,
		refetchOnMount: false
	});
async function queryFn() {
	const result = await apiHelper.search.getPopularAttraction();
	return result;
}

export default usePopularAttractions;
