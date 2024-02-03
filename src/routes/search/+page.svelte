<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const getDownloadLink = (name: string, id: number) => {
		const repo = name.split('/')[1];
		const repoURL = repo.split('').join('/');

		return `https://eu2.contabostorage.com/804ba90921c840faaef217da994b795a:github/${repoURL}/${id.toString()}.zip`;
	};
</script>

<svelte:head>
	<title>Search</title>
</svelte:head>

<main>
	<div>
		{#each data.results as res}
			<div class="bg-outline p-2 flex justify-between items-center">
				<h1 class="text-xl font-bold pb-6 flex">
					[{res.host}]
					{res.name}
				</h1>

				<a href={getDownloadLink(res.name, res.id)} target="_blank" rel="noopener noreferrer">
					<button class="bg-primary p-2 px-4 text-black font-semibold rounded"> Download </button>
				</a>
			</div>
		{/each}
	</div>
</main>
