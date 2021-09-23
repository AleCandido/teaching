<script>
	export let title;
</script>

<svelte:head>
	<title>Teaching - {title}</title>
</svelte:head>

<article>
	<h1>{title}</h1>
	<p class="ml-auto mr-6 mb-8 md:-mt-10 text-right text-lg underline">
		<a href="." class="border border-double border-black p-2">Back</a>
	</p>
	<main class="overflow-auto">
		<slot />
	</main>
	<p class="mx-auto mt-8 text-lg text-center underline">
		<a href="." class="border border-double border-black p-2">Back</a>
	</p>
</article>
<footer>
	<slot name="footer" />
</footer>

<style>
	article {
		max-width: 53em;
		margin: auto;
		margin-bottom: 10vh;
	}

	h1 {
		font-size: 2em;
		margin: 1em 0 0.6em 1em;
	}

	main :global(blockquote p) {
		font-style: italic;
		max-width: 30em;
		text-align: right;
		margin: 1em 1em 1em auto;
	}

	main :global(p) {
		font-size: 13pt;
		margin: 0.6em 0 0.6em 0;
	}

	main :global(h2) {
		font-size: 18pt;
		font-weight: bold;
		text-transform: uppercase;
		margin: 1.2em 0 0.7em 0.3em;
	}

	main :global(h3) {
		font-size: 14pt;
		font-weight: bold;
		text-transform: uppercase;
		margin: 1em 0 0 0.1em;
	}

	a,
	main :global(a) {
		color: #555;
	}
	main :global(a:hover) {
		color: #777;
	}

	main :global(ol) {
		list-style-type: decimal;
		/* list-style-position: inside; */
		margin: 0.5em 0 0.5em 2em;
	}

	main :global(ul) {
		list-style-type: disc;
		margin: 0.5em 0 0.5em 2em;
	}
</style>
