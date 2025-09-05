import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	site: "https://luisdourado.com",
	vite: {
		plugins: [tailwindcss()],
	},
	prefetch: true,
	redirects: {
		"/feed": "/feed.xml",
		"/rss": "/feed.xml",
		"/rss.xml": "/feed.xml",
	},
	integrations: [mdx(), sitemap(), react(), robotsTxt()],
});
