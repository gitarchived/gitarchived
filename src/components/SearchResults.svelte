<script lang="ts">
  import type { Repository } from "@types";
  import { onMount } from "svelte";
  import RepositoryCard from "./RepositoryCard.svelte";

  export let repositories: Repository[];
  export let lastPage: boolean;
  export let query: string;
  export let index: number = 0;

  let observer: IntersectionObserver;

  async function fetchNext() {
    if (lastPage) return;

    const res = await fetch(
      `https://api.gitarchived.org/search?q=${query}&index=${index + 1}`,
    ).then((res) => res.json() as Promise<{ results: Repository[]; continue: boolean }>);

    repositories = [...repositories, ...res.results];
    index += 1;
    lastPage = !res.continue;

    const target = document.querySelector(`#repo-${repositories.length - 1}`);

    if (!target) return;

    observer.unobserve(target);

    const newTarget = document.querySelector(
      `#repo-${repositories.length + res.results.length - 1}`,
    );

    if (!newTarget) return;

    observer.observe(newTarget);
  }

  onMount(() => {
    observer = new IntersectionObserver((entries) => {
      if (entries[entries.length - 1].isIntersecting) {
        fetchNext();
      }
    });

    const target = document.querySelector(`#repo-${repositories.length - 1}`);

    if (!target) return;

    observer.observe(target);
  });
</script>

{#each repositories as repository, i}
  <div id={`repo-${i}`}>
    <RepositoryCard {repository} />
  </div>
{/each}
