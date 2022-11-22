<script lang="ts">
	import { apiHelper } from '$lib/services/api-helper';
	import { activeProvince } from '$lib/store';
	import { Spinner } from 'flowbite-svelte';
	import AttractionTile from './AttractionTile.svelte';
	import Loading from './Loading.svelte';

	let proviceId = 'all';
	activeProvince.subscribe((value) => (proviceId = value));
</script>

<main>
	{#await apiHelper.service.getAll(0, 1000, 1, 21, proviceId, '', [], '')}
		<Loading/>
	{:then { data }}
		<div class="grid">
			{#each data as item}
				<AttractionTile {item} />
			{/each}
		</div>
	{/await}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: row;
		width: 100%;
		overflow-x: auto;
		padding: 10px 0px;
		height: 100%;
		.grid {
			display: grid;
			column-gap: 50px;
			grid-template-columns: auto auto auto;
		}
	}
</style>
