<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const url = `./index.json`;
    const response = await fetch(url);
    if (response.ok) {
      return {
        props: { ...(await response.json()) },
      };
    }
    return {};
  }
</script>

<script>
	import Card from '$lib/Card.svelte';

    export let years;
</script>

<header>
    <h1 class="text-6xl text-center m-10">
        Teaching Material
    </h1>
</header>

<main>
	<p>Here I store the material for anything I teach or help to (as much as I manage to update).</p>

    {#each [...Object.entries(years)].reverse() as [year, projects]}
    <h2 class="text-3xl font-bold mt-8 mb-3">{year}</h2>
    <div class="flex flex-wrap justify-around">
        {#each projects as project}
	    <Card year={year} details={project}/>
        {/each}
    </div>
    {/each}
</main>

<style>
	main {
		max-width: 53em;
		margin: auto;
	}
</style>
