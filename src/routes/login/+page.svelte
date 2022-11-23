<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { Button } from 'flowbite-svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;
	function fbLogin() {}
	function googleLogin() {}
</script>

<main class="flex flex-col items-center justify-center p-2">
	<div class="text-2xl font-medium py-3">Travona Login</div>
	<div class="flex gap-6 w-full">
		<div class="flex flex-col gap-2 w-full">
			<Button on:click={fbLogin}>Continue with Facebook</Button>
			<Button on:click={googleLogin}>Contineu with Google</Button>
			<div class="flex justify-center items-center gap-3">
				<div class="w-full h-[1px] text-red-900 flex-1 border" />
				<div>or</div>
				<div class="w-full h-[1px] text-red-900 flex-1 border" />
			</div>
		</div>
		<div class="flex w-full">
			<form action="?/login" method="POST" class="flex flex-col gap-3">
				<div class="flex items-center justify-center gap-2">
					<label class="w-20" for="email">Email</label>
					<input id="email" name="email" type="text" required />
				</div>

				<div class="flex items-center justify-center gap-2">
					<label class="w-20" for="password">Password</label>
					<input id="password" name="password" type="password" required />
				</div>

				{#if form?.invalid}
					<p class="error">Email and password is required.</p>
				{/if}

				{#if form?.credentials}
					<p class="error">You have entered the wrong credentials.</p>
				{/if}

				<button class="border bg-blue-700 text-white rounded-md py-2" type="submit">Log in</button>
			</form>
		</div>
	</div>
</main>
