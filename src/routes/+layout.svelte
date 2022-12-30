<script lang="ts">
	import '../app.css';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import AppBar from '$lib/components/AppBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<main>
		<AppBar />
		<div class="content">
			<slot />
		</div>
		<Footer />
	</main>
</QueryClientProvider>

<style lang="scss">
	main {
		display: flex;
		width: 100%;
		flex-direction: column;
		.content {
			padding: 0 5%;
		}
	}
</style>
