<svelte:head>
	<title>GitArchived</title>
</svelte:head>

<div class="flex border-b border-outline flex-col items-center justify-center md:p-12 h-96">
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

<div>
	<div class="p-12 flex items-center">
		<div class="w-1/2 space-y-2">
			<h1 class="text-4xl font-bold">Never lose repositories again</h1>
			<p class="text-lg">
				GitArchived strives to crare an up-to-date archive of many open source repositories. By
				preserving code on another repository you are safe from unforeseen events such as code
				privatization or leakage.
			</p>
		</div>
		<div class="w-1/2 flex justify-center">
			<img src="/logo.png" alt="icon" class="w-40 h-40" />
		</div>
	</div>
	<div class="p-12 flex items-center">
		<div class="w-1/2 flex justify-center">
			<img src="/logo.png" alt="icon" class="w-40 h-40" />
		</div>
		<div class="w-1/2 space-y-2">
			<h1 class="text-4xl font-bold">Never lose repositories again</h1>
			<p class="text-lg">
				GitArchived strives to crare an up-to-date archive of many open source repositories. By
				preserving code on another repository you are safe from unforeseen events such as code
				privatization or leakage.
			</p>
		</div>
	</div>
</div>
