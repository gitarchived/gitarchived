import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), svelte()],
  adapter: cloudflare({
    mode: "directory",
  }),
});
