<script context="module">
    export const load = async ({ props }) => {
    	return {
    	    props,
    	    stuff: { metadata: { "title": props.post.metadata.title, "description": props.post.metadata.description, "type": "article"} }
    	}
    }
</script>
<script>
    export let post;
</script>
<svelte:head>
    <meta property="og:type" content="article" />
    <meta property="og:article:published_time" content={post.metadata.date} />

    <!-- Post tags -->
    {#if post.metadata.tags}
        {#each post.metadata.tags as tag}
            <meta name="keywords" content={tag} />
            <meta property="og:article:tag" content={tag} />
        {/each}
    {/if}

    <link href="/prism.css" rel="stylesheet" />
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


<div>
<script src="/prism.js"/>
</div>
