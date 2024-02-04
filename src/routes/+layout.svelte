<script>
	import '../app.css';
</script>

<div class="flex flex-col h-screen justify-between">
	<div class="bg-secondary p-2 text-black font-semibold text-center">
		<h1>
			GitArchived is in beta! Please report any issues you encounter. Join the community on <a
				class="underline"
				href="https://discord.gg/2wD2VbZ">Discord</a
			>
		</h1>
	</div>
	<nav class="flex items-center justify-between bg-outline p-3 px-4">
		<div class="flex items-center space-x-2">
			<img src="/logo.png" alt="icon" class="w-9 h-9" />

			<form action="/search" method="get">
				<input
					type="text"
					placeholder="Search on GitArchived..."
					class="w-full p-1.5 px-3 rounded bg-background focus:outline-none"
				/>
			</form>
		</div>

		<div>
			<a href="/new">
				<button class="bg-primary p-2 px-5 rounded text-black">New</button>
			</a>
		</div>
	</nav>
	<slot />
	<footer class="p-12 flex justify-between bg-outline">
		<div>
			<p>Made and archived with ❤️ by <a href="https://github.com/gitarchived">GitArchived</a></p>
		</div>

		<div class="grid grid-cols-3 gap-2 text-center">
			<a href="/donate" class="bg-background p-1 px-2 rounded">Donate</a>
			<a href="/faq" class="bg-background p-1 px-2 rounded">Faq</a>
			<a href="/source" class="bg-background p-1 px-2 rounded">Source</a>
		</div>
	</footer>
</div>
