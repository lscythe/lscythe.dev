import { envField as env } from "astro/config";

export const schema = {
  REPO_URL: env.string({
    context: "server",
    access: "public",
    optional: false,
  }),
};
