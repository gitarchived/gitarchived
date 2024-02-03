import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';
import type { Search } from '$lib/types/Search';

export const load: PageServerLoad = async ({ url }) => {
  const q = url.searchParams.get('q');

  if (!q) {
    return redirect(303, "/");
  }

  const res = await fetch(`https://api.gitarchived.org/search?q=${q}`)
    .then((res) => res.json() as Promise<{ data: Search[] }>);

  return {
    results: res.data
  }
};
