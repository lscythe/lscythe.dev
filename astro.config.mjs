// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import { schema } from "./src/env";

export default defineConfig({
  site: "https://rendrap.dev",
  integrations: [sitemap()],
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
  server: { host: true },
  build: {
    format: "preserve",
    assets: "static",
  },
  scopedStyleStrategy: "class",
  env: {
    schema,
    validateSecrets: true,
  },
});
