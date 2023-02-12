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
			manifestFilename: "app.webmanifest",
			manifest: {
				name: "AngelNext",
				short_name: "AngelNext",
				description: "The personal site of AngelNext.",
				display: "standalone",
				background_color: "#ffffff",
				theme_color: "#7611a6",
				icons: [
					{
						src: "/angelnext-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "/angelnext-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
			workbox: {
				navigateFallback: "/404",
				globPatterns: ["**/*.{js,css,html,webp,png,woff,woff2}"],
			},
			devOptions: {
				enabled: true,
				navigateFallback: "/404",
			},
		}),
	],
});
