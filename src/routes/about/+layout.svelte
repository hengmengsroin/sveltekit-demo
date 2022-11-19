<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	console.log(data);
</script>

<main>
	<p>{data}</p>
	<slot />
</main>

<style lang="scss">
	main {
		color: blue;
	}
</style>
