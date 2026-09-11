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
	// Legacy Session was renamed to Next Chapter Session as part of the
	// sports-to-general-identity pivot. Keeps old bookmarks/links working
	// instead of 404ing.
	redirects: {
		'/legacy-session': '/next-chapter-session',
	},
});
