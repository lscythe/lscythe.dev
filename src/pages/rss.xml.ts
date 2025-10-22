import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

export const GET: APIRoute = (context) => {
  return rss({
    title: "Lscythe",
    description: "Lscythe personal blog",
    site: import.meta.env.SITE,
    items: [],
  });
};
