<script lang="ts">
	export let hours: { day: number; hour: { from: string; to: string } }[];
	let dayMap = ['Moday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	let newHours = hours.map((item) => {
		let day = dayMap[item.day - 1];
		let time = item.hour.from + ' - ' + item.hour.to;
		return {
			day,
			time
		};
	});
</script>

<main class="flex flex-col my-3 font-[600]">
	<div class="text-blue-600">Opening Hourse</div>
	{#each newHours as hour}
		<div class="flex flex-row justify-between my-1 font-[400]">
			<div class="text-gray-600">{hour.day}</div>
			<div class="text-gray-600">{hour.time}</div>
		</div>
	{/each}
</main>
