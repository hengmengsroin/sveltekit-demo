<script lang="ts">
	import { Spinner } from 'flowbite-svelte';
	import { apiHelper } from '../services/api-helper';
	import ProvinceTile from './ProvinceTile.svelte';
	let getProvince = apiHelper.getProvinces();
</script>

<div class="main">
	{#await getProvince}
		<div class="loading">
			<Spinner color="purple" />
		</div>
	{:then { data }}
		{#each data as province}
			<ProvinceTile {province} />
		{/each}
	{:catch}
		<p>Ops, something went wrong</p>
	{/await}
</div>

<style lang="scss">
	.main {
		display: flex;
		flex-direction: row;
		width: 100%;
		overflow-x: scroll;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: center;
		padding: 10px 0;
		.loading {
			width: 100%;
		}
	}
</style>
