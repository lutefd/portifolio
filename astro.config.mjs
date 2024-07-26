import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://luisdourado.com",
  prefetch: true,
  redirects: {
    "/feed": "/feed.xml",
    "/rss": "/feed.xml",
    "/rss.xml": "/feed.xml",
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    robotsTxt(),
  ],
});
