<script>
	export let title = '';
</script>

<div
	class="relative body pt-4 pb-2 px-4 m-2 mt-8 mx-4 bg-gray-100 border border-black shadow flow-root"
>
	<h4 id={title} class="absolute -top-4 font-bold text-lg">
		<span class="p-2 drop-shadow" style="background-color: #fafafa">
			{title}
		</span>
	</h4>
	<slot />
</div>
