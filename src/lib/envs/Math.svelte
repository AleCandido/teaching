<script>
	import katex from 'katex';

	export let latex;
    export let display = false;


	const rendered = katex.renderToString(latex, {
        displayMode: display,
		macros: {
			'\\dd': '\\text{d}',
			'\\dv': '\\frac{\\dd #1}{\\dd #2}',
			'\\dx': '\\frac{\\dd #1}{\\dd x}',
			'\\ddx': '\\frac{\\dd}{\\dd x}'
		},
		throwOnError: false
	});
</script>

{@html rendered}
