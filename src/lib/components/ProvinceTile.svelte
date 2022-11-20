<script lang="ts">
	import { activeProvince } from '$lib/store';
	export let province: any;
	let isActive: boolean = false;
	activeProvince.subscribe((value) => {
		isActive = province._id == value;
	});
	function changeToActive() {
		activeProvince.set(province._id);
	}
</script>

<button class="main" class:active={isActive} on:click={changeToActive}>
	<div class="image">
		<img src={province.thumbnail} alt="thumbnail" />
	</div>
	<div class="name">{province.name}</div>
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
			width: 150px;
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

	.active {
		border: 1px red solid;
	}
</style>
