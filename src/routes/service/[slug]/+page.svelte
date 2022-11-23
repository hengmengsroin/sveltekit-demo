<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import OpenHourSection from '$lib/components/OpenHourSection.svelte';
	import ReviewListSection from '$lib/components/ReviewListSection.svelte';
	import Section from '$lib/components/Section.svelte';
	import SummaryList from '$lib/components/SummaryList.svelte';
	import { Star } from 'svelte-heros-v2';
	import type { PageData } from './$types';
	export let data: PageData;
	let { service } = data;
	function gotoPurchasePage() {
		goto(location.pathname + '/purchase');
	}
</script>

<main>
	<div class="image">
		<img src={service.thumbnails[0]} alt="thumbnail" />
	</div>
	<div class="flex flex-row justify-between title">
		<div>{service.name}</div>
		{#if $page.data.user}
			<button
				class="border px-4 bg-orange-600 text-white rounded-md text-lg"
				on:click={gotoPurchasePage}>Purchase</button
			>
		{/if}
	</div>
	<div class="merchant">
		{service.merchant.name}
	</div>
	<div class="flex text-orange-400 flex-row">
		<Star />
		{service.overall_rating.overall}
	</div>
	<div class="text-orange-600 font-bold text-3xl">$3</div>
	<div class="content">
		<div class="left">
			<SummaryList items={service.summary} />
			<div class="description">
				{@html service.description}
			</div>
			<div class="image">
				<img src={service.photos[0]} alt="thumbnail" />
			</div>
			<Section title="Additional Info" content={service.overview.additional_info} />
			<Section title="Cancellation Policy" content={service.overview.cr_policy} />
			<ReviewListSection serviceId={service._id} />
		</div>
		<div class="right">
			<OpenHourSection hours={service.opening_days_hours} />
		</div>
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;

		.image {
			width: 100%;
			height: 500px;
			img {
				object-fit: cover;
				height: 100%;
				width: 100%;
			}
		}

		.title {
			width: 100%;
			padding: 10px 0;
			font-size: 1.6rem;
			font-weight: bold;
			color: blue;
		}
		.merchant {
			width: 100%;
			font-size: 1.2rem;
			color: gray;
			padding: 5px 0;
		}

		.rating {
			width: 100%;
		}
		.price {
			width: 100%;
		}
		.content {
			display: flex;
			flex-direction: row;
			width: 100%;
			gap: 32px;
			.left {
				display: flex;
				flex-direction: column;
				flex: 2;

				.description {
					margin: 10px 0;
				}

				.image {
					aspect-ratio: 1;
					max-height: 500px;
					margin: 10px 0;
					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						border-radius: 10px;
					}
				}
			}
			.right {
				display: flex;
				flex-direction: column;
				flex: 1;
			}
		}
	}
</style>
