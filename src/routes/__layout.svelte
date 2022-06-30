<script lang="ts">
    import {website} from "$lib/utils";
    
    import "../app.css";
    import Header from "../components/header.svelte"
    import Footer from "../components/footer.svelte";

    import {page} from "$app/stores";

    export let metadata = ($page.stuff as any).metadata || {"title": "", "description": "Teenage girl with an interest for programming, Linux, & security."};
    export let title = metadata.title ? `${metadata.title} - wxllow.dev` : "wxllow.dev";
    export let path = $page.url.pathname;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={metadata.description}/>

    <!-- Open Graph -->
    <meta property="og:title" content={title}>
    <meta property="og:description" content={metadata.description}/>
    <meta property="og:url" content={`${website}${path}`}>

    {#if (!metadata.type)}
        <meta property="og:type" content="website">
    {/if}

    <!-- Tags -->
    {#each ["code", "dev", "developer", "portfolio", "coding", "programming"] as tag}
        <meta name="keywords" content={tag} />
    {/each}

    <!-- Twitter -->
    <meta name="twitter:title" content={title}>
    <meta name="twitter:description" content={metadata.description}>
    <meta property="twitter:url" content={`${website}${path}`}>
    <meta property="twitter:domain" content={website}>

    <meta name="theme-color" content="#F4B7C1"/>
</svelte:head>

<!-- Header -->
<header>
    <Header/>
</header>
<!-- Main -->
<main class="my-4"><slot /></main>
<!-- Footer -->
<footer><Footer/></footer>
<!-- Scripts -->
<div>
    <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js" defer></script>
    <script>
        if (new URLSearchParams(window.location.search).get("sus") != null) {
            document.documentElement.classList.add("sus");
        }
    </script>
</div>
