<script lang="ts">
    import { page } from "$app/stores";

    let status = $page.status;
    let error = $page.error as App.PageError;
</script>

{#if status === 404}
    <h1 class="text-5xl text-red-500">404: Not Found</h1>
    <p class="text-2xl text-gray-300">Nothing to see here! :p</p>
{:else}
    <h1 class="text-5xl text-red-500">{status} Error</h1>
    <p class="text-2xl text-gray-300">{error.message}</p>
{/if}
