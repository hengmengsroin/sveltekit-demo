<script lang="ts">
	import placeHolder from '$lib/assets/images/no-pictures.png';
	export let item: any;
</script>

<button class="main">
	<div class="image">
		<img src={item.thumbnails[0] ?? placeHolder} alt="thumbnail" />
	</div>
	<div class="name">{item.name}</div>
</button>

<style lang="scss">
	.main {
		display: flex;
		cursor: pointer;
		flex-direction: column;
		border-radius: 10px;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: center;
		margin: 10px;
		box-shadow: 1px grey;

		.image {
			width: 250px;
			aspect-ratio: 3/2;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 10px;
			}
		}
		.name {
			text-align: center;
			width: 100%;
		}
	}
</style>
