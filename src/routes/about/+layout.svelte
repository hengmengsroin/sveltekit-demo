<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	console.log(data);
</script>

<main>
	<h1>About page</h1>
	<slot />
</main>

<style lang="scss">
	main {
		color: blue;
	}
</style>
