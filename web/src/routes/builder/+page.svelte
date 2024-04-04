<script lang="ts">
	import ClipboardOutline from 'virtual:icons/mdi/clipboard-outline';
	import ClipboardCheckOutline from 'virtual:icons/mdi/clipboard-check-outline';

	interface Config {
		[key: string]: any | undefined;
		max: number | undefined;
		maxTopPapers: number | undefined;
		minROWarningThreshold: number | undefined;
		'pubs.minIndicatorsWarningThreshold': number | undefined;
		'software.minIndicatorsWarningThreshold': number | undefined;
		'data.minIndicatorsWarningThreshold': number | undefined;
	}

	enum Status {
		Ready,
		Copied
	}

	const researchOutputTypes: { [key: string]: string } = {
		pubs: 'Publications',
		software: 'Software Projects',
		data: 'Data Sets'
	};

	let status: Status = Status.Ready;

	let URL = 'https://nicebread.github.io/RESQUE/web';

	const descriptions: { [key: string]: string } = {
		max: 'Number of slots (maximum number of submittable research outputs)',
		maxTopPapers: 'Number of top papers (maximum number of "best research outputs")',
		minROWarningThreshold: 'Threshold for "number of required research outputs" warning',
		'pubs.minIndicatorsWarningThreshold':
			'Score threshold for "too many indicators are not applicable" warning',
		'software.minIndicatorsWarningThreshold':
			'Score threshold for "too many indicators are not applicable" warning',
		'data.minIndicatorsWarningThreshold':
			'Score threshold for "too many indicators are not applicable" warning'
	};

	let defaults: Config = {
		max: 10,
		maxTopPapers: 3,
		minROWarningThreshold: 5,
		'pubs.minIndicatorsWarningThreshold': 5,
		'software.minIndicatorsWarningThreshold': 5,
		'data.minIndicatorsWarningThreshold': 5
	};

	let data: Config = {
		max: undefined,
		maxTopPapers: undefined,
		minROWarningThreshold: undefined,
		'pubs.minIndicatorsWarningThreshold': undefined,
		'software.minIndicatorsWarningThreshold': undefined,
		'data.minIndicatorsWarningThreshold': undefined
	};

	const globalConfigVariables = Object.keys(descriptions).filter((key) => !key.includes('.'));

	// Categorize type-specific config variables into an object with keys 'pubs', 'software', 'data' each a list of variable names
	const typeSpecificConfigVariables = Object.keys(descriptions)
		.filter((key) => key.includes('.'))
		.reduce(
			(acc, key) => {
				const [type, variable] = key.split('.');
				if (!acc[type]) {
					acc[type] = [];
				}
				acc[type].push(variable);
				return acc;
			},
			{} as { [key: string]: string[] }
		);

	const copyLink = () => {
		navigator.clipboard.writeText(link).then(() => {
			status = Status.Copied;
			new Promise((r) => setTimeout(r, 3000)).then(() => {
				status = Status.Ready;
			});
		});
	};

	function generateLink(data: Config) {
		const query = Object.entries(data)
			// Only keep values that different from the defaults
			.filter(
				([key, value]: [string, number]) =>
					data[key as keyof Config] && defaults[key as keyof Config] !== value
			)
			// Stringify
			.map(([key, value]) => key + '=' + value)
			.join('&');

		return URL + (query ? '?' + query : '');
	}

	$: link = generateLink(data);
</script>

<header>
	<div class="header-container">
		<h3>
			RESQUE Builder <button on:click={copyLink}>
				{#if status === Status.Ready}
					<ClipboardOutline />
				{:else if status === Status.Copied}
					<ClipboardCheckOutline />
				{/if}
			</button>
		</h3>
		<div class="result">
			<p><a id="link" href={link}>{link}</a></p>
		</div>
	</div>
</header>
<div class="content">
	<div class="container">
		<h2>Global parameters</h2>
		{#each globalConfigVariables as key}
			<p class="title">{descriptions[key]}; default: {defaults[key]}</p>
			<input type="number" placeholder={descriptions[key]} bind:value={data[key]} />
		{/each}
	</div>

	<hr />

	<div class="container">
		<h2>Parameters for specific research outputs</h2>
		{#each Object.keys(typeSpecificConfigVariables) as type}
			<div>
				<h3>{researchOutputTypes[type]}</h3>
				{#each typeSpecificConfigVariables[type].map((v) => type + '.' + v) as variable}
					<p class="title">{descriptions[variable]}; default: {defaults[variable]}</p>
					<input type="number" placeholder={descriptions[variable]} bind:value={data[variable]} />
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	header {
		padding: 2px;
		position: sticky;
		top: 0;
		background: #fff;
	}

	.header-container {
		text-align: center;
		width: 95%;
		max-width: 740px;
		margin: 0 auto;
	}

    .content {
        width: 95%;
        max-width: 740px;
        margin: 0 auto;
    }

	.container {
		width: 95%;
		max-width: 740px;
		margin: 0 auto;
	}
</style>
