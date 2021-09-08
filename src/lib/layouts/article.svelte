<script>
    export let title;
</script>


<article>
    <h1>{title}</h1>
    <main>
        <slot/>
    </main>
</article>

<style>
    h1 {
        font-size: 2em;
        margin: 1em 0 0.6em 1em;
    }
    
    article {
        max-width: 53em;
        margin: auto;
    } 

    main :global(blockquote p) {
        font-style: italic;
        max-width: 30em; 
        text-align: right;
        margin: 1em 1em 1em auto;
    }

    main :global(p) {
        font-size: 13pt;
        margin: 1em 0 0 0;
    }

    main :global(h2) {
        font-size: 18pt;
        font-weight: bold;
        text-transform: uppercase;
        margin: 1em 0 0.5em 0.3em;
    }

    main :global(a) {
        color: #555;
    }
    main :global(a:hover) {
        color: #777;
    }

    main :global(ol) {
        list-style-type: decimal;
        list-style-position: inside;
    }
</style>
