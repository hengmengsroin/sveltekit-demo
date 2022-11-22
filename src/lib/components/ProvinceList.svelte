<script lang="ts">
	import { Spinner } from 'flowbite-svelte';
	import { apiHelper } from '../services/api-helper';
	import Loading from './Loading.svelte';
	import ProvinceTile from './ProvinceTile.svelte';
	let getProvince = apiHelper.getProvinces();
</script>

<div class="main">
	{#await getProvince}
		<Loading/>
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
		height: 100%;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: center;
		padding: 10px 0;
		
	}
</style>
