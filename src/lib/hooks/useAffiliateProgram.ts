import { useQuery } from '@sveltestack/svelte-query';
import { apiHelper } from '../services/api-helper';

const useAffiliateProgram = (token: string) =>
	useQuery(['affiliate_program'], () => apiHelper.getAffiliateProgram({}, token), {
		refetchOnWindowFocus: false,
		refetchOnMount: false
	});

export default useAffiliateProgram;
