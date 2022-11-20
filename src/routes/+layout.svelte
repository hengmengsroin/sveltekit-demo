<script lang="ts">
	import '../app.css';
	import AppBar from '$lib/components/AppBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="main">
	<AppBar />
	<slot />
	<Footer />
</div>

<style lang="scss">
	.main {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
	}
</style>
