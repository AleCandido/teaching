<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="https://annibale.dev/favicon.png" />
	<meta property="og:image" content="https://annibale.dev/favicon.png" />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.css"
		integrity="sha384-zTROYFVGOfTw7JV7KUu8udsvW2fx4lWOsCEDqhBreBwlHI4ioVRtmIvEThzJHGET"
		crossorigin="anonymous"
	/>
	<script
		defer
		src="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.js"
		integrity="sha384-GxNFqL3r9uRJQhR+47eDxuPoNE7yLftQM8LcxzgS4HT73tp970WS/wV5p8UzCOmb"
		crossorigin="anonymous"></script>
</svelte:head>

<slot />
