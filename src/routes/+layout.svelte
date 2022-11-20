<script lang="ts">
	import '../app.css';
	import AppBar from '$lib/components/AppBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main>
	<AppBar />
	<slot />
	<Footer />
</main>

<style lang="scss">
	main {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
	}
</style>
