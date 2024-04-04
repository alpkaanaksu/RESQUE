<script>
	export let title;
	export let type;
    export let selected;

	const typeNames = {
		pub: 'Publication',
		software: 'Sofware Project',
		data: 'Data Set'
	};
</script>

<div class={selected ? 'selected' : ''}>
	<b>{typeNames[type]}</b>
	<br />
	<span>{title}</span>
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
