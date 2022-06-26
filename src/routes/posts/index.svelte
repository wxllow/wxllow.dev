<script>
    export let posts;
</script>
<h1 class="text-5xl font-bold sidelines">Posts</h1>

{#each posts as { slug, metadata, content }}
    <a href="/posts/{slug}"><h1 class="text-4xl text-sky-400">{metadata.title}</h1></a>
    <p>{metadata.description || "No description"}</p>
{/each}
