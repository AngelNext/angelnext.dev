import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import compress from "astro-compress";

export default defineConfig({
	site: "https://angelnext.dev/",
	integrations: [prefetch(), sitemap(), compress()],
});
