<script>
	import Menu from '$lib/Menu.svelte';
	import Tabs from '$lib/Tabs.svelte';
	import Form from '$lib/Form.svelte';

    import { config, input } from '../stores';
	import { onMount } from 'svelte';

    onMount(() => {
        $config.max = 10;
    })

</script>

<div class="main-container">
	<div class="tabs">
		<Tabs />
	</div>
	<div class="form">
		<Form />
	</div>
	<div class="menu">
		<Menu />
	</div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap');

	:global(body) {
		font-family: 'Montserrat', sans-serif;
		margin: 0;
		height: 100vh;
		width: 100%;
		overflow: hidden;
		color: #333333;
	}

	.main-container {
		display: flex;
		flex-direction: row;
		height: 100%;
		width: 100%;
		margin: 0 auto;
		box-sizing: content-box;
	}

	.tabs {
		flex: 1 1 25%;
		border-right: 1px solid lightgray;
	}

	.form {
		flex: 1 1 45%;
		height: 100vh;
		overflow: hidden;
	}

	.menu {
		flex: 1 1 30%;
		border-left: 1px solid lightgray;
	}
</style>
