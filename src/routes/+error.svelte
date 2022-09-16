<script lang="ts">
    import { page } from "$app/stores";

    let title = $page.status;
    let error = $page.error as App.PageError;
</script>

<h1 class="text-5xl text-red-500">{title} Error</h1>
<h2 class="text-2xl text-gray-300">{error.message}</h2>

<!-- Needs fix; error.stack not in PageError since migration -->
<!-- {#if import.meta.env.DEV}
    <h3 class="mt-8 text-xl text-gray-300">Stack For Nerds</h3>
    <code class="w-4/5 text-base">{error.stack}</code>
{/if} -->

