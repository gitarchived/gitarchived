<script lang="ts">
  import { fade } from "svelte/transition";
  import type { Repository } from "../types";
  import downloadIcon from "../images/download.svg";
  import closeIcon from "../images/x.svg";

  export let repository: Repository;

  let modalEnabled = false;

  const backslashName = repository.name.split("").join("/").replaceAll(".", "-");
  const downloadUrl = `https://cdn.gitarchived.org/${backslashName}/${repository.id}.bundle`;

  const handleClickOutside = (e: Event) => {
    if (e.target === e.currentTarget) modalEnabled = false;
  };
</script>

{#if modalEnabled}
  <div
    class="absolute left-0 top-0 z-10 flex h-screen w-full items-center justify-center bg-black/40"
    transition:fade={{ delay: 0, duration: 100 }}
    on:click={handleClickOutside}
    aria-hidden="true"
  >
    <div
      class="flex h-screen w-full flex-col items-center justify-center rounded-lg bg-stone-800 p-4 sm:h-min sm:max-w-sm"
    >
      <div class="flex w-full justify-between">
        <div class="text-lg font-bold">Download has started!</div>
        <button on:click={() => (modalEnabled = false)}>
          <img src={closeIcon.src} alt="close" />
        </button>
      </div>

      <div class="flex w-full flex-col gap-2 pt-2">
        <p class="pt-2 text-sm">
          Thanky you for downloading {repository.name} from us! Use this command to extract the bundle:
        </p>

        <code class="mt-2 min-w-full rounded-lg border border-stone-50/10 bg-stone-900 p-2">
          git clone {repository.id}.bundle
        </code>

        <span class="text-sm italic opacity-75">
          Respect <a href="/about/terms" class="underline">our terms</a> and
          {repository.name} license.
        </span>
      </div>
    </div>
  </div>
{/if}

<a href={downloadUrl} download class="w-full md:w-fit" on:click={() => (modalEnabled = true)}>
  <button
    class="flex w-full items-center justify-center gap-1 rounded-lg border border-stone-50/10 bg-stone-900 p-2 text-sm hover:underline md:w-fit"
  >
    <img src={downloadIcon.src} alt="download" /> Download
  </button>
</a>
