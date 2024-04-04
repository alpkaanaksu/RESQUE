<script>
	import Tab from '$lib/Tab.svelte';
	import Button from './Button.svelte';

    import { config, input } from '../stores';
</script>

<div class="container">
	<div class="top">
        <h3>RESQUE</h3>
        <div>
            <Button action={() => alert("Oy!")}>Clear</Button>
            <Button action={() => alert("Oy!")}>Load</Button>
            <Button action={() => alert("Oy!")}>Save to file...</Button>
        </div>
    </div>
    <p>{$input.length} of {$config.max} slots used</p>
	<Tab type="pub" title="x" />
</div>

<style>
    .container {
        padding: 16px;
    }

    .top {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;
        align-items: center;
        padding-bottom: 16px;
    }

    h3 {
        margin: 0;
    }

    p {
        margin: 8px 0;
        color: gray;
        font-size: small;
    }
</style>
