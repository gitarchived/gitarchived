<script lang="ts">
  import plusIcon from "../images/plus.svg";
  import closeIcon from "../images/x.svg";
  import { fade } from "svelte/transition";
  import { isLink } from "../utils/isLink";

  export let buttonText = "add a new repo";

  let modalEnabled = false;
  let errorMessage = "";
  let repoName = "";
  let isLoading = false;

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    if (isLoading) return;
    if (!repoName || repoName === "") return (errorMessage = "Missing URL.");

    isLoading = true;

    fetch("https://api.gitarchived.org/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: repoName,
      }),
    }).then(async (data) => {
      isLoading = false;
      const parsedData = await data.json();

      if (parsedData.status !== 200) return (errorMessage = parsedData.message);

      location.href = `/r/${parsedData.host}/${parsedData.owner}/${parsedData.name}`;
    });
  };
</script>

{#if modalEnabled}
  <div
    class="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-black/40"
    transition:fade={{ delay: 0, duration: 100 }}
  >
    <div
      class="flex h-screen w-full flex-col items-center justify-center rounded-lg bg-stone-800 p-4 sm:h-min sm:max-w-sm"
    >
      <div class="flex w-full justify-between">
        <div class="text-lg font-bold">Add a new repo</div>
        <button on:click={() => (modalEnabled = false)}>
          <img src={closeIcon.src} alt="search" />
        </button>
      </div>
      <form class="flex w-full flex-col gap-2 pt-2" on:submit={handleSubmit}>
        <div class="relative">
          <input
            type="text"
            bind:value={repoName}
            placeholder="https://github.com/torvalds/linux"
            class="h-9 w-full rounded-lg border border-stone-50/10 bg-stone-800 px-8 ring-stone-50/10 focus:outline-none focus:ring"
          />
          <img src={plusIcon.src} alt="search" class="absolute left-2 top-2" />
        </div>
        <button
          data-clickable={isLink(repoName)}
          disabled={!isLink(repoName)}
          class="h-9 w-full rounded-lg bg-[#F1502F] ring-orange-600/50 duration-150 focus:outline-none data-[clickable=false]:cursor-not-allowed data-[clickable=false]:opacity-50"
        >
          Submit
        </button>
        {#if errorMessage !== ""}
          <p class="font-bold text-red-400">{errorMessage}</p>
        {/if}
      </form>
    </div>
  </div>
{/if}

<button class="cursor-pointer font-bold underline" on:click={() => (modalEnabled = true)}>
  {buttonText}
</button>
