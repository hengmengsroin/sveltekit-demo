<script lang="ts">
	import useAllAttractions from '$lib/hooks/useAllAttractions';
	import { apiHelper } from '$lib/services/api-helper';
	import { activeProvince } from '$lib/store';
	import AttractionTile from './AttractionTile.svelte';
	import Loading from './Loading.svelte';

	let provinceId = 'all';
	const queryResult = useAllAttractions({
		minPrice: 0,
		maxPrice: 1000,
		page: 1,
		count: 30,
		province: provinceId
	});
	activeProvince.subscribe((value) => {
		provinceId = value;
	});
</script>

<main>
	<h2>Attraction List</h2>
	{#if $queryResult.isLoading}
		<Loading />
	{:else if $queryResult.error}
		<span>An error has occurred: {$queryResult.error}</span>
	{:else}
		<div class="grid">
			{#each $queryResult.data?.data ?? [] as item}
				<AttractionTile {item} />
			{/each}
		</div>
	{/if}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		width: 100%;
		overflow-x: auto;
		padding: 10px 0px;
		height: 100%;
		.grid {
			display: grid;
			column-gap: 50px;
			grid-template-columns: auto auto auto;
		}

		h2 {
			color: blue;
			font-size: 1.2rem;
			font-weight: 900;
			padding: 10px 0;
		}
	}
</style>
