import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit(), devtoolsJson()],

	resolve: {
		alias: {
			// This maps $content to the actual src/content directory
			$content: path.resolve('./src/content')
		}
	}
});
