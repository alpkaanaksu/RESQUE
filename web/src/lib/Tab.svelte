<script lang="ts">
    import { getTypeName } from "../utils/helpers";
    import { currentIndex } from "../stores";

	export let title: string;
	export let type: string;
    export let selected: boolean;
    export let index: number;

    const displayType = getTypeName(type as "data" | "pub" | "software");
</script>

<div
    class={selected ? 'selected' : ''}
    on:click={() => $currentIndex = index}
    on:keydown={(e) => {
        if (e.key === 'Enter') {
            $currentIndex = index;
        }
    }}
    role="button"
    tabindex="0"
>
    <b>{displayType}</b>
	<br />
    {#if title}
	    <span>{title}</span>
    {/if}
</div>

<style>
    div {
        font-size: 11pt;
        background-color: #efefef;
        border-radius: 8px;
        padding: 0.5rem 1rem;
        margin-bottom: 8px;
        cursor: pointer;
    }

    div:hover {
        background-color: #dfdfdf;
    }

    div.selected {
        background-color: #333333;
        color: #efefef;
    }

    div span {
        pointer-events: none;
    }
</style>
