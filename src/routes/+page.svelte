<script lang="ts">
	import ProvinceList from '$lib/components/ProvinceList.svelte';
	import { Alert } from 'flowbite-svelte';
</script>

<div class="main">
	<ProvinceList />
</div>

<style lang="scss">
	.main {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
</style>
