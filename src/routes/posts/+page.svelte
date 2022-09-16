<script lang="ts">
    export let data: { posts: { path: string, metadata: { title: string, description?: string, date: string, tags: string[] } }[] };
</script>
<h1 class="text-5xl font-bold sidelines">Posts</h1>

{#each data.posts as { path, metadata }}
    <a href={path}><h1 class="text-4xl text-sky-400">{metadata.title}</h1></a>
    <p>{metadata.description || "No description"}</p>
{/each}
