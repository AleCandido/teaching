import remarkMath from 'remark-math'; 
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkGFM from 'remark-gfm';
import remarkGithub from 'remark-github'
import remarkAbbr from 'remark-abbr'

import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';

export default {
	extensions: [".svx", ".md"],
	smartypants: {
		dashes: "oldschool",
	},
	layout: { 
		project: './src/lib/layouts/project.svelte',
		_: './src/lib/layouts/article.svelte'
	},
	remarkPlugins: [
		remarkMath,
		remarkAutolinkHeadings,
		remarkGFM,
		remarkGithub,
		remarkAbbr
	],
	rehypePlugins: [
		rehypeKatex,
		rehypeSlug,
	],
	highlight: {
		alias: {
			ts: "typescript",
			md: "markdown",
		}
	},
};
