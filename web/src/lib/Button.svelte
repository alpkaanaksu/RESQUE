<script>
	export let critical = false;
	export let action = () => {};
</script>

<button class={critical ? 'critical' : ''} on:click={action}><slot /></button>

<style>
    button {
        font-size: 12pt;
        background-color: #efefef;
        border-radius: 4px;
        border: none;
        padding: 0.25rem 0.5rem;
        font-weight: bold;
        transition: 150ms;
        cursor: pointer;
    }

    button:hover {
        background-color: #dfdfdf;
    }

    button.critical {
        background-color: firebrick;
        color: #efefef;
    }

    button.critical:hover {
        background-color: firebrick;
        color: #efefef;

        box-shadow: 0 0 8px firebrick;
    }
</style>