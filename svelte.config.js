/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const production = !process.env.ROLLUP_WATCH;

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: { 
				project: './src/lib/layouts/project.svelte',
				_: './src/lib/layouts/article.svelte'
			}
		}),
		preprocess({
			sourceMap: !production,

			postcss: {
				plugins: [tailwindcss, autoprefixer]
			}
		})
	],

	extensions: ['.svelte', '.md', '.svx'],

	kit: {
		adapter: adapter({
			paths: {
				base: '/teaching',
			},
		}),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
