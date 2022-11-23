<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import logo from '$lib/assets/images/logo.png';
	import { page } from '$app/stores';
	import { Button, Input } from 'flowbite-svelte';
	import { applyAction, enhance } from '$app/forms';
	function goHome() {
		goto('/');
	}
	function goLogin() {
		goto('/login');
	}
</script>

<div class="main">
	<button class="logo" on:click={goHome}>
		<img class="img" src={logo} alt="logo" />
	</button>
	<div class="spacer" />
	<div class="search">
		<Input type="text" id="first_name" placeholder="John" />
	</div>
	<div class="spacer" />
	{#if !$page.data.user}
		<div class="login">
			<Button on:click={goLogin}>Login</Button>
		</div>
	{:else}
		<div class="login">
			<form
				action="/logout"
				method="POST"
				use:enhance={() => {
					return async ({ result }) => {
						invalidateAll();
						await applyAction(result);
					};
				}}
			>
				<Button type="submit">Logout</Button>
			</form>
		</div>
	{/if}
</div>

<style lang="scss">
	.spacer {
		flex: 1;
	}
	.main {
		display: flex;
		flex-direction: row;
		padding: 0.6rem 15%;
		background-color: aquamarine;
		min-height: 60px;
		.logo {
			.img {
				height: 2rem;
			}
		}
	}
</style>
