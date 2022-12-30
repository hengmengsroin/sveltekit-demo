import { useQuery } from '@sveltestack/svelte-query';
import type { IResponse } from '$lib/models/res.model';
import { apiHelper } from '../services/api-helper';
import type { IFeatureSlide } from '$lib/models/feature.model';

type UseCollectionsQuery = {
	provinceId?: string;
};

const usePromotionList = ({ provinceId }: UseCollectionsQuery) =>
	useQuery<IResponse<IFeatureSlide>>(
		['promotionSlider', provinceId],
		() => apiHelper.getPromotionSlides(provinceId),
		{
			enabled: provinceId != null,
			refetchOnWindowFocus: false,
			refetchOnMount: false
		}
	);

export default usePromotionList;
