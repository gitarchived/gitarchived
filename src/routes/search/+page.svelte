<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;

	const getDownloadLink = (name: string, id: number) => {
		const repo = name.split("/")[1];
		let repoURL = repo.split("").join("/");
		repoURL = repoURL.replace(/\./g, "-");

		return `https://eu2.contabostorage.com/804ba90921c840faaef217da994b795a:github/${repoURL}/${id.toString()}.zip`;
	};
</script>

<svelte:head>
	<title>Search</title>
</svelte:head>

<main>
	<div class="p-4 grid grid-cols-4">
		{#each data.results as res}
			<div class="bg-outline p-4 rounded">
				<div>
					<h1 class="text-2xl text-center font-bold pb-6">
						{res.name}
					</h1>
				</div>
				<a href={getDownloadLink(res.name, res.id)} target="_blank" rel="noopener noreferrer">
					<button class="bg-primary p-2 px-4 text-black font-semibold rounded w-full">
						Download
					</button>
				</a>
			</div>
		{/each}
	</div>
</main>
