<script lang="ts">
	import placeHolder from '$lib/assets/images/no-pictures.png';
	export let item: any;
</script>

<main>
	<img src={item.thumbnail ?? placeHolder} alt="thumbnail" loading="lazy" />
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: row;
		height: 250px;
		aspect-ratio: 955/591;
		margin: 10px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 10px;
		}
	}
</style>
