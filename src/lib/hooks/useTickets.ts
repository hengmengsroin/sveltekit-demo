import { useQuery } from '@sveltestack/svelte-query';
import { apiHelper } from '../services/api-helper';

type IMyTicket = {
	service: any[];
	tour: any[];
	restaurant: any[];
};

const useTickets = (userId: string) =>
	useQuery<IMyTicket>(['tickets', userId], () => apiHelper.getMyTickets(userId), {
		enabled: userId != null,
		refetchOnWindowFocus: false,
		refetchOnMount: false
	});

export default useTickets;
