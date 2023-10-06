<script>
    import Uses from "./uses.component.svelte";
</script>

<div class="mx-4 my-2 space-y-8 md:container">
    <div>
        <h1 class="text-5xl font-bold my-4">wxllow.dev</h1>

        <p class="text-xl">
            Hey there, welcome to my little corner of the internet!
        </p>
        <p class="my-2">I am a programmer and tech enthusiast.</p>
        <p class="my-2">
            I code mostly in TypeScript, Go, & Python, but I am also familiar
            with other languages.
        </p>
    </div>
    <div class="alert alert-warning">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            /></svg
        >

        <span>This website is a work in progress</span>
    </div>
    <div id="blog">
        <h2 class="text-4xl font-bold my-4">Blog</h2>
        <p class="text-xl">Coming soon! :)</p>
    </div>
    <div id="use">
        <Uses />
    </div>
</div>
