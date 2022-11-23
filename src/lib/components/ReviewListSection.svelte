<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import moment from 'moment';
	import { apiHelper } from '../services/api-helper';
	import { Star } from 'svelte-heros-v2';
	import Loading from './Loading.svelte';
	export let serviceId: string;
	let fetchData = apiHelper.getReviews(serviceId, 6, 1);
</script>

<div class="main">
	<div class="title">Reviews</div>
	{#await fetchData}
		<Loading />
	{:then { data }}
		{#each data as review}
			<div class="review">
				<div class="header">
					<Avatar border size={'md'} src={review.author.profile_img} />
					<div class="nameBox">
						<div class="name">{review.author.first_name + ' ' + review.author.last_name}</div>
						<div class="rating">
							<Star size="22px" />
							{review.value}
						</div>
					</div>
					<div class="date">{moment(review.createdAt).format('DD-MMM-YYYY HH:mm')}</div>
				</div>
				<div class="content">{review.comment}</div>
			</div>
		{/each}
	{:catch}
		<p>Ops, something went wrong</p>
	{/await}
</div>

<style lang="scss">
	.main {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: center;
		margin: 10px 0px;
		.title {
			font-weight: 600;
			color: blue;
			font-size: 1.1rem;
		}

		.review {
			display: flex;
			width: 100%;
			flex-direction: column;
			padding: 10px;
			margin: 5px 0;
			border: 1px grey solid;
			border-radius: 10px;
			.header {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 10px;
				.nameBox {
					flex: 1;
					.name {
						color: rgb(25, 88, 223);
					}

					.rating {
						color: orangered;
						display: flex;
						flex-direction: row;
						gap: 2px;
					}
				}
				.date {
					color: grey;
				}
			}
		}
	}
</style>
