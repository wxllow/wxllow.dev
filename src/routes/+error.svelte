<script context="module">
    export function load({ status, error }) {
        return {
            props: {
                title: status,
                error: error
            }
        };
    }
</script>

<script>
    export let title, error;
</script>

<h1 class="text-5xl text-red-500">{title} Error</h1>
<h2 class="text-2xl text-gray-300">{error.message}</h2>

{#if import.meta.env.DEV}
    <h3 class="mt-8 text-xl text-gray-300">Stack For Nerds</h3>
    <code class="w-4/5 text-base">{error.stack}</code>
{/if}

