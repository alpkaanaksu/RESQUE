<script lang="ts">
	import Tab from '$lib/Tab.svelte';
	import Button from './Button.svelte';

    import { config, input, currentIndex } from '../stores';
    import { handleLoad, clear, saveToFile } from '../utils/storage'
	import { getTypeName } from '../utils/helpers';

    let hiddenFilePicker: HTMLInputElement | undefined;

    const handleInput = () => {
        hiddenFilePicker?.click();
    };
</script>

<div class="container">
	<div class="top">
        <h3>RESQUE</h3>
        <div>
            <Button action={() => clear()}>Clear</Button>
            <Button action={() => hiddenFilePicker?.click()}>Load</Button>
            <Button action={() => saveToFile()}>Save to file...</Button>
        </div>
    </div>
    <p>{$input.length} of {$config.max} slots used</p>

	{#each $input as tab, index}
        <Tab
            type={tab.type} 
            title={tab.title}
            index={index}
            selected={index === $currentIndex}
        />        
    {/each}

    {#if $input.length < $config.max}
        {#each ['pub', 'software', 'data'] as type}
            <Button
                action={() => {
                    input.update(input => {
                        input.push({ type });
                        return input;
                    });
                }}
            >Add {getTypeName(type)}</Button>
        {/each}
    {/if}
</div>

<input
    type="file"
    style="display: none ;"
    bind:this={hiddenFilePicker}
    on:input={async () => {
        handleLoad(await JSON.parse(this.files[0].text()));
    }}
/>

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
