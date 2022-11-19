<script lang="ts">
	export let data: any;
	console.log(data);
</script>

<main>
	<h1>About page</h1>
	<p>{data.user.first_name}</p>
</main>

<style lang="scss">
	main {
		background-color: red;
	}
</style>
