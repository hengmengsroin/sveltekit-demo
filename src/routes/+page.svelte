<script lang="ts">
	import AttractionList from '$lib/components/AttractionList.svelte';
	import PromotionList from '$lib/components/PromotionList.svelte';
	import ProvinceList from '$lib/components/ProvinceList.svelte';
</script>

<div class="main">
	<ProvinceList />
	<PromotionList />
	<AttractionList />
</div>

<style lang="scss">
	.main {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 0 15%;
		flex: 1;
	}
</style>
