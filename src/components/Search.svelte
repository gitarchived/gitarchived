<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import searchIcon from "../images/search.svg";
  const isBrowser = import.meta.env.SSR === false;

  let inputIsFocused = false;
  let searchForm: HTMLFormElement;

  const handleClick = (event: MouseEvent) => {
    if (searchForm && !searchForm.contains(event.target as Node)) {
      inputIsFocused = false;
    }
  };

  onMount(() => {
    if (isBrowser) {
      document?.addEventListener("click", handleClick);
    }
  });

  let searchQuery = "";

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    searchQuery = target.value.replace(/\s/g, "");
    fetchResults();
  }

  let searchInput: HTMLInputElement | undefined;

  const onKeyDown = (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      searchInput?.focus();
    }
  };

  let searchResults: {
    name: string;
    owner: string;
  }[] = [];

  async function fetchResults() {
    if (searchQuery.length > 0) {
      const response = await fetch(`https://api.gitarchived.org/search?q=${searchQuery}`);
      if (true) {
        console.log("did i get here");
        const formattedResponse = await response.json();
        if (!formattedResponse) return;
        const results = formattedResponse.results;
        if (!results) return (searchResults = []);
        searchResults = results.slice(0, 3);
      }
    } else {
      searchResults = [];
    }
  }
</script>

<form
  action="q"
  autocomplete="off"
  class="w-fit"
  bind:this={searchForm}
  on:submit={() => (inputIsFocused = false)}
>
  <div class="relative">
    <input
      name="q"
      on:focus={(e) => e.currentTarget.select()}
      type="text"
      placeholder="Search GitArchived"
      bind:this={searchInput}
      bind:value={searchQuery}
      on:focusin={() => (inputIsFocused = true)}
      on:input={handleInput}
      class="h-9 w-full max-w-sm rounded-lg border border-stone-50/10 bg-stone-800 px-8 ring-stone-50/10 focus:outline-none focus:ring"
    />
    <img src={searchIcon.src} alt="search" class="absolute left-2 top-2" />
    {#if searchQuery && searchQuery !== "" && searchResults.length > 0 && inputIsFocused}
      <div
        class="absolute z-50 mt-2 flex w-full flex-col overflow-hidden rounded-lg border border-stone-50/10 bg-stone-800"
      >
        <div class="flex flex-col">
          {#each searchResults as result}
            <button
              class={`${
                result.name.toLowerCase() == searchQuery.toLowerCase() && "bg-stone-900"
              } p-2 text-start outline-none duration-150 hover:bg-stone-900 focus:bg-stone-900`}
              on:focusin={() => (searchQuery = result.name)}
            >
              <span class="text-white/50">{result.owner}/</span>{result.name}
            </button>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</form>

<svelte:window on:keydown={onKeyDown} />
