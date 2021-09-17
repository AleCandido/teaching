<script>
    import {dev} from '$app/env';

    export let alt;
    export let src;

    const teaching = dev? "": "/teaching"
</script>

<center class="p-4">
  <img alt={alt} src="{teaching}{src}">
</center>
