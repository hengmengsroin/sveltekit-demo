<script lang="ts">
	import logo from '$lib/assets/images/logo.png';
	import { Button, Input } from 'flowbite-svelte';
</script>

<div class="main">
	<div class="logo">
		<img class="img" src={logo} alt="logo" />
	</div>
	<div class="spacer" />
	<div class="search">
		<Input type="text" id="first_name" placeholder="John" />
	</div>
	<div class="spacer" />
	<div class="login">
		<Button>Login</Button>
	</div>
</div>

<style lang="scss">
	.spacer {
		flex: 1;
	}
	.main {
		display: flex;
		flex-direction: row;
		padding: 0.6rem 3rem;

		// height: 3rem;
		background-color: aquamarine;

		.logo {
			.img {
				height: 2rem;
			}
		}
	}
</style>
