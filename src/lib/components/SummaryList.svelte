<script lang="ts">
	export let items: { _id: string; icon: { icon: string; name: string }; content: string }[];
</script>

<main>
	{#each items as item}
		<div class="item" id={item._id}>
			<div class="icon">
				<img alt={item.icon.name} src={item.icon.icon} />
			</div>
			<div class="text">{item.content}</div>
		</div>
	{/each}
</main>

<style lang="scss">
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 10px;
		border: 1px blue solid;
		border-radius: 10px;
		margin: 10px 0;

		.item {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 10px;
			padding: 2px 0;
			.icon {
				color: blue;
				aspect-ratio: 1/1;
				width: 20px;
				height: 20px;

				img {
					width: 100%;
					height: 100%;
					color: blue;
					object-fit: cover;
				}
			}

			.text {
				color: blue;
			}
		}
	}
</style>
