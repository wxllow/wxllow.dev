<script>
    import "../app.css";
    import Header from "../components/header.svelte"

    export let title;
</script>

<div>
    <!-- Header -->
    <header>
        <Header/>
        
        <title>{title || "wxllow.dev"}</title>

    </header>
    <!-- Main -->
    <main class="my-4"><slot /></main>
    <!-- Scripts -->
    <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js" defer></script>

</div>
