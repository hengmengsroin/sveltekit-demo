<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<main>
	<h1>User management</h1>
	<slot />
</main>

<style lang="scss">
	main {
		display: flex;
		flex: 1;
		flex-direction: column;
	}
</style>
