import remarkMath from 'remark-math';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkGFM from 'remark-gfm';
import remarkGithub from 'remark-github';
import remarkAbbr from 'remark-abbr';

import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';

import katex from 'katex';
import visit from 'unist-util-visit';

const macros = {
	'\\f': '#1f(#2)',
	'\\dd': '\\text{d}',
	'\\dv': '\\frac{\\dd #1}{\\dd #2}',
	'\\dx': '\\frac{\\dd #1}{\\dd x}'
};

const correctHastTree = () => (tree) => {
	visit(tree, 'text', (node) => {
		if (node.value.trim().startsWith('<')) {
			node.type = 'raw';
		}
	});
};

const katexBlocks = () => (tree) => {
	visit(tree, 'code', (node) => {
		if (node.lang === 'math') {
			const str = katex.renderToString(node.value, {
				displayMode: true,
				leqno: false,
				fleqn: false,
				throwOnError: true,
				errorColor: '#cc0000',
				strict: 'warn',
				output: 'htmlAndMathml',
				trust: false,
				macros
			});

			node.type = 'raw';
			node.value = '{@html `' + str + '`}';
		}
	});
};

export default {
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	layout: {
		project: './src/lib/layouts/project.svelte',
		_: './src/lib/layouts/article.svelte'
	},
	remarkPlugins: [
		remarkMath,
		katexBlocks
		// remarkAutolinkHeadings,
		// remarkGFM,
		// remarkGithub,
		// remarkAbbr
	],
	rehypePlugins: [
		correctHastTree,
		[rehypeKatex, {macros}]
		// rehypeSlug,
	],
	highlight: {
		alias: {
			ts: 'typescript',
			md: 'markdown'
		}
	}
};
