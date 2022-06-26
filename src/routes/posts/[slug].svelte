<script>
    export let post;
</script>

<h1 class="title text-5xl">{post.metadata.title}</h1>
<p class="info text-gray-700 dark:text-gray-300">Published {post.metadata.date}</p>
<div class="w-full border-b border-black dark:border-white "></div>

<div class="postcontent">
    {#if post.metadata.video }
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/{post.metadata.video}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    {/if}
    {@html post.content}
</div>
