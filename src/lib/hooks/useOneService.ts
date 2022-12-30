import { useQuery } from '@sveltestack/svelte-query';
import { apiHelper } from '../services/api-helper';

const useOneService = (serviceId: string) =>
	useQuery(['service', serviceId], () => apiHelper.service.getOne(serviceId), {
		refetchOnWindowFocus: false
	});

export default useOneService;
