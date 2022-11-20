<script lang="ts">
	import logo from '$lib/assets/images/logo.png';
</script>

<div class="main">
	<div class="logo">
		<img src={logo} alt="logo" />
	</div>
	<div class="search">
		<input />
	</div>
	<div class="login">
		<button>Login</button>
	</div>
</div>

<style lang="scss">
	.main {
		display: flex;
		flex-direction: row;
		padding: 0.2rem;
		height: 3rem;
		background-color: aquamarine;
	}
</style>
