<script lang="ts">
    import "../app.css";
    import Header from "$components/header.svelte";
    import Footer from "$components/footer.svelte";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { theme } from '$lib/stores'

    $: metadata = $page.data.metadata || {
        title: "",
        description: "",
    };
    $: title = metadata.title ? `${metadata.title} - wxllow.dev` : "wxllow.dev";
    $: path = $page.url.pathname;
    $: website = "https://wxllow.dev";

    onMount(() => {
        theme.set(localStorage.getItem("theme") === 'light' ? 'light' : "dark");
    })
    let lightMode = false;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={metadata.description} />

    <!-- Open Graph -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:url" content={`${website}${path}`} />

    {#if !metadata.type}
        <meta property="og:type" content="website" />
    {/if}

    <!-- Tags -->
    {#each ["code", "dev", "developer", "coding", "programming"] as tag}
        <meta name="keywords" content={tag} />
    {/each}

    <!-- Twitter -->
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta property="twitter:url" content={`${website}${path}`} />
    <meta property="twitter:domain" content={website} />

    <meta name="theme-color" content="#F4B7C1" />
</svelte:head>

<div data-theme={`${$theme}`}>
    <header>
        <Header />
    </header>

    <main class="mt-4 mb-8 relative">
        <slot />
    </main>

    <footer><Footer /></footer>
</div>
