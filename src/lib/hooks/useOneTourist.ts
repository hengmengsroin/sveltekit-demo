import { useQuery } from '@sveltestack/svelte-query';
import { apiHelper } from '../services/api-helper';

const useOneTourist = (touristId: string, token: string) => {
	console.log({ touristId });
	return useQuery(['tourist', touristId], () => apiHelper.getOneTourist(touristId, token), {
		refetchOnWindowFocus: false,
		enabled: touristId != ''
	});
};

export default useOneTourist;
