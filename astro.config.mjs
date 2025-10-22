// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { schema } from "./src/env";

export default defineConfig({
  site: "https://rendrap.dev",
  integrations: [sitemap()],
  build: {
    format: "preserve",
    assets: "static",
  },
  env: {
    schema,
    validateSecrets: true,
  },
});
