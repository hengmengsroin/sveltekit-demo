import { useQuery } from '@sveltestack/svelte-query';
import { apiHelper } from '../services/api-helper';

const useServiceOptions = (serviceId: string) =>
	useQuery(['service_options', serviceId], () => apiHelper.service.option_content(serviceId), {
		refetchOnWindowFocus: false
	});

export default useServiceOptions;
