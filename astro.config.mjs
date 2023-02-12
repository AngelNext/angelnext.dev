import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import AstroPWA from "@vite-pwa/astro";

export default defineConfig({
	site: "https://angelnext.dev/",
	integrations: [
		prefetch(),
		sitemap({
			customPages: [
				"https://angelnext.dev/",
				"https://angelnext.dev/work",
				"https://angelnext.dev/work/loxt",
				"https://angelnext.dev/work/pyrite",
			],
		}),
		AstroPWA({
			registerType: "autoUpdate",
			manifest: false,
			workbox: {
				navigateFallback: "/404",
				globPatterns: ["**/*.{js,css,html,webp,png,svg}"],
			},
		}),
	],
});
