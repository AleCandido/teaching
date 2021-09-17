/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

import process from 'process';

const production = process.env.NODE_ENV !== 'test';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			sourceMap: !production,

			postcss: {
				plugins: [tailwindcss, autoprefixer]
			}
		})
	],

	extensions: ['.svelte', '.md', '.svx'],

	kit: {
		adapter: adapter(),
		paths: {
			assets: production ? 'https://www.annibale.dev/teaching' : '',
			base: production ? '/teaching' : ''
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		trailingSlash: 'always'
	}
};

export default config;
