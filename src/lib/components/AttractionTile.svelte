<script lang="ts">
	import { goto } from '$app/navigation';
	import placeHolder from '$lib/assets/images/no-pictures.png';
	export let item: any;
	function openDetail(){
		let name: string = item.name;
		let serviceName =name.replaceAll(' ' , '-');
		let url ="/service/"+ item._id + "-"+ serviceName;
		goto(url);
	}
</script>

<button class="main" on:click={openDetail}>
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
