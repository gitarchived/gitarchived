<script>
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>GitArchived</title>
</svelte:head>

<main>
	<div class="flex flex-col items-center justify-center md:p-12">
		<h1 class="text-5xl font-bold pb-6 flex">
			<span class="text-primary">Git</span>
			<span class="text-secondary">Archived</span>
		</h1>

		<form action="/search" method="GET" class="flex w-96">
			<input
				type="text"
				name="q"
				placeholder="Search for a repository... (ex: neovim/neovim)"
				class="w-full p-2 px-3 rounded bg-outline focus:outline-none"
			/>
		</form>
	</div>
</main>
