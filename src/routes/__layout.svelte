<script lang="ts">
    import "../app.css";
    import Header from "../components/header.svelte"
    import Footer from "../components/footer.svelte";

    import {page} from "$app/stores";

    export let metadata = ($page.stuff as any).metadata || {"title": "", "description": "Teenage girl with an interest for programming, Linux, & security."};
    export let title = metadata.title ? `${metadata.title} - wxllow.dev` : "wxllow.dev";
</script>

<svelte:head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={metadata.description}/>
    <meta property="og:description" content={metadata.description}/>
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
</div>
