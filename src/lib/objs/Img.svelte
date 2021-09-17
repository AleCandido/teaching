<script>
	import { dev } from '$app/env';

	export let alt;
	export let src;
	export let align = 'none';

	let alignment = '';
	if (align === 'right') {
		alignment = `float-right`;
	} else if (align === 'left') {
		alignment = `float-light`;
	}

	const teaching = dev ? '' : '/teaching';
</script>

<img {alt} src="{teaching}{src}" class="mx-auto px-4 py-2 {alignment}" />
