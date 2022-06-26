<script lang="ts">
    import header from "./header";

    const pages: any = header;
</script>

<nav class="border-gray-200 px-2 sm:px-6 py-4 rounded-lg bg-pink-400">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" class="flex items-center font-semibold text-xl">
            wxllow.dev
        </a>
        <button data-collapse-toggle="mobile-menu" type="button" class="p-2 ml-3 rounded-lg md:hidden focus:outline-none focus:ring-2 text-white hover:backdrop-brightness-90 focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul class="flex flex-col md:flex-row md:space-x-6 md:mt-0">
                {#each pages as {name, url}}
                    <li>
                        <a href="{url}" class="block py-2 pr-4 pl-3 rounded md:p-0 text-white hover:brightness-90" aria-current="page">{name}</a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>
