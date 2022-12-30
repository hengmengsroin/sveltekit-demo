import { useQuery } from '@sveltestack/svelte-query';
import { apiHelper } from '../services/api-helper';

const useMyRewards = (token: string) =>
	useQuery(['rewards'], () => apiHelper.getMyReward({}, token), {
		refetchOnWindowFocus: false,
		refetchOnMount: false
	});

export default useMyRewards;
