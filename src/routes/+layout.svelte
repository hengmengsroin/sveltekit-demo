<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<main>
	<nav />
	<aside>
		<div class="app-bar" />
		<slot />
	</aside>
</main>

<style lang="scss">
	main {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: row;

		nav {
			display: flex;
			flex-direction: column;
			width: 300px;
			height: 100%;
			background-color: rgb(176, 145, 21);
		}

		aside {
			width: 100%;
			display: flex;
			flex-direction: column;

			.app-bar {
				height: 60px;
				display: flex;
				flex-direction: row;
				padding: 4px;
				background-color: greenyellow;
			}
		}
	}
</style>
