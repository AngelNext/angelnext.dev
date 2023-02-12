import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import compress from "astro-compress";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	site: "https://angelnext.dev/",
	vite: {
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifestFilename: "app.webmanifest",
				manifest: {
					name: "AngelNext",
					short_name: "AngelNext",
					description: "The personal site of AngelNext.",
					display: "standalone",
					background_color: "#fff",
					theme_color: "#7611a6",
					icons: [
						{
							src: "/icons/angelnext-192x192.png",
							sizes: "192x192",
							type: "image/png",
						},
						{
							src: "/icons/angelnext-512x512.png",
							sizes: "512x512",
							type: "image/png",
						},
						{
							src: "/icons/angelnext-512x512.png",
							sizes: "512x512",
							type: "image/png",
							purpose: "maskable",
						},
					],
				},
				workbox: {
					globDirectory: "dist",
					globPatterns: [
						"**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
					],
					maximumFileSizeToCacheInBytes: 100000000,
					navigateFallback: null,
				},
				devOptions: {
					enabled: true,
				},
			}),
		],
	},
	integrations: [prefetch(), sitemap(), compress()],
});
