<script lang="ts">
    import { dateFormatter } from "$lib/utils";

    export let data;
</script>

<article class="mx-4 md:container space-y-6">
    <hgroup>
        <h1 class="text-5xl font-bold my-4">{data.meta.title}</h1>
        <p>
            {data.meta.updated ? "Updated" : "Published"}
            {dateFormatter.format(new Date(data.meta.date))}
        </p>
    </hgroup>

    <div class="prose prose-lg">
        <svelte:component this={data.content} />
    </div>
</article>

<style lang="postcss">
</style>
