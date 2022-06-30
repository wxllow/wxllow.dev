<script>
    import "../app.css";
    import Header from "../components/header.svelte"
    import Footer from "../components/footer.svelte";
</script>

<div>
    <!-- Header -->
    <header>
        <Header/>
    </header>
    <!-- Main -->
    <main class="my-4"><slot /></main>
    <!-- Footer -->
    <footer><Footer/></footer>
    <!-- Scripts -->
    <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js" defer></script>
</div>
