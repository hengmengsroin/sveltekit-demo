import { useQuery } from '@sveltestack/svelte-query';
import { apiHelper } from '../services/api-helper';

const usePopularSearchData = () =>
	useQuery(['popularSearch'], getData, {
		refetchOnWindowFocus: false,
		refetchOnMount: false
	});
async function getData() {
	const result = await apiHelper.search.getPopularSearch();
	return result;
}

export default usePopularSearchData;
