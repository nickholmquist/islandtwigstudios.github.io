// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://islandtwigstudios.com',
	// Output about.html instead of about/index.html so GitHub Pages
	// serves /about directly, with no redirect — matches the original
	// static site's file-per-page structure exactly.
	build: {
		format: 'file',
	},
});
