<script lang="ts">
	import { goto } from '$app/navigation';
	import logo from '$lib/assets/images/logo.png';
	import { Button, Input } from 'flowbite-svelte';
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
	<div class="login">
		<Button on:click={goLogin}>Login</Button>
	</div>
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
