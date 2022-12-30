import { useQuery } from '@sveltestack/svelte-query';
import { apiHelper } from '../services/api-helper';

interface UseCollectionsQuery {
	provinceId?: string;
}

interface Response {
	data: any[];
	pagination: any;
}

const useCollections = ({ provinceId }: UseCollectionsQuery) =>
	useQuery<Response>(['collections', provinceId], () => apiHelper.getCollections(provinceId), {
		enabled: provinceId != null,
		refetchOnWindowFocus: false,
		refetchOnMount: false
	});

export default useCollections;
