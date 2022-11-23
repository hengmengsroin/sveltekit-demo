<script lang="ts">
	export let data: any;
	console.log(data);
</script>

<main>
	<p>{data.user.first_name}</p>
</main>

<style lang="scss">
	main {
		background-color: red;
	}
</style>
