import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import astroTurnstile from "astro-turnstile";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	output: "hybrid",
	adapter: node({ mode: "standalone" }),
	integrations: [
		tailwind(),
		astroTurnstile({
			verbose: true,
		}),
	],
});
