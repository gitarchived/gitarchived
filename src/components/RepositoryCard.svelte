<script lang="ts">
  import type { Repository } from "@types";
  import Download from "./Download.svelte";

  export let repository: Repository;
</script>

<div class="flex w-full flex-col gap-2 rounded-lg border border-stone-50/10 p-3">
  <div class="flex w-full flex-col items-center justify-between gap-2 md:flex-row">
    <span
      class={`flex items-center font-bold text-white md:text-2xl ${repository.owner.length + repository.name.length > 20 ? "text-xl" : "text-2xl"}`}
    >
      <span class="text-white/50">
        {`${repository.owner}/`}
      </span>
      <span>{repository.name}</span>
      <span
        class={`ml-2 rounded-full px-2 py-1 text-xs font-bold ${repository.deleted ? "bg-red-400 text-black" : "bg-green-400 text-black"}`}
      >
        {repository.deleted ? "Deleted" : "Active"}
      </span>
    </span>
    {#if repository.lastCommit}
      <Download {repository} />
    {:else}
      <span class="text-sm italic text-white/50">Downloadable soon...</span>
    {/if}
  </div>

  <div class="rounded-lg border border-stone-50/10 bg-stone-900 p-2">
    <div>
      <span class="font-bold">Host:</span>
      <span>{repository.host}</span>
    </div>
    {#if repository.lastCommit}
      <div>
        <span class="font-bold">Last commit:</span>
        <span>{repository.lastCommit.substring(0, 8)}</span>
      </div>
    {/if}
  </div>
</div>
