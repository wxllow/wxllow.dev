<script>
    export let post;
</script>
<svelte:head>
    <link href="/prism.css" rel="stylesheet" />
    <script src="/prism.js"></script>
    <title>{`${post.metadata.title} - wxllow.dev`}</title>
    <meta name="title" content={`${post.metadata.title} - wxllow.dev`} />
    <meta name="description" content={post.metadata.description}/>
    <meta name="og:title" content={`${post.metadata.title} - wxllow.dev`}>
    <meta name="og:description" content={post.metadata.description}/>
    <meta name="og:type" content="article" />
    <meta name="og:article:published_time" content={post.metadata.date} />

    <!-- Post tags -->
    {#if post.metadata.tags}
        {#each post.metadata.tags as tag}
            <meta name="keywords" content={tag} />
            <meta name="og:article:tag" content={tag} />
        {/each}
    {/if}
    
</svelte:head>



<post class="px-20">
    <h1 class="title text-5xl">{post.metadata.title}</h1>
    <p class="info text-gray-700 dark:text-gray-300">Published {post.metadata.date}</p>
    <div class="w-full border-b border-black dark:border-white "></div>
    {#if post.metadata.video }
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/{post.metadata.video}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    {/if}
    {@html post.content}
</post>


