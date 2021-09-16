<script>
	export let year;
	export let details;
</script>

<a href="./courses/{year}/{details.project}">
    <article class="w-96 m-5 h-40 flex border border-gray-500 rounded-lg overflow-hidden bg-white">
        <img src="/books-small.jpg" alt="" class="flex-grow-0 h-full w-2/5">
        <div class="w-7/12 pt-2 mr-3 ml-3">
            <h4 class="mb-2 capitalize font-bold underline">
                {details.title}
            </h4>
            <p class="text-sm pl-1">
                {details.description}
            </p>
        </div>
    </article>
</a>

<style>
	article {
		box-shadow: 3px 3px black;
	}

	article:hover {
		background-color: #eee;
	}
</style>
