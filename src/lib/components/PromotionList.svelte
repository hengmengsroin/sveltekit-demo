<script lang="ts">
	import { apiHelper } from '$lib/services/api-helper';
	import { activeProvince } from '$lib/store';
	import { Spinner } from 'flowbite-svelte';
	import Loading from './Loading.svelte';
	import PromotionTile from './PromotionTile.svelte';

	let proviceId = 'all';
	activeProvince.subscribe((value) => (proviceId = value));
</script>

<main>
	{#await apiHelper.getPromotionSlides(proviceId)}
		<Loading/>
	{:then { data }}
		{#each data as item}
			<PromotionTile {item} />
		{/each}
		{#if data.length == 0}
			<p>No data</p>
		{/if}
	{/await}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
		overflow-x: auto;
		padding: 10px 0px;
	}
</style>
