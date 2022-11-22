<script lang="ts">
	import '../app.css';
	import AppBar from '$lib/components/AppBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main>
	<AppBar />
	<div class="content">
		<slot />
	</div>
	<Footer />
</main>

<style lang="scss">
	main {
		display: flex;
		width: 100%;
		flex-direction: column;
		.content{
			padding: 0 15%;
		}
	}
</style>
