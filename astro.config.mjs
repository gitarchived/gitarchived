import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://gitarchived.org",
  output: "server",
  integrations: [tailwind(), svelte(), mdx(), sitemap()],
  adapter: cloudflare({
    mode: "directory",
  }),
});
