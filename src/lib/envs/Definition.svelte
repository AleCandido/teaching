<script>
    export let title = "";
</script>

<h4 id={title} class="-mb-5 font-bold text-lg">
    <span class="p-2 drop-shadow" style="background-color: #fafafa">
        {title}
    </span>
</h4>
<div class="body pt-4 pb-2 px-4 m-2 mx-4 bg-gray-100 border border-black shadow">
    <slot/>
</div>
