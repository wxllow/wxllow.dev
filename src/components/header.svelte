<script>
    import { page } from "$app/stores";
    import { theme } from "$lib/stores";

    const links = [
        {
            name: "Home",
            href: "/#",
        },
        {
            name: "Blog",
            href: "/#blog",
        },
        {
            name: "What I Use",
            href: "/#use",
        },
        {
            name: "GitHub",
            href: "https://github.com/wxllow",
            target: "_blank",
        },
    ];

    let navbarOpen = false;

    function toggleTheme() {
        const value = `${$theme}` === "dark" ? "light" : "dark";

        localStorage.setItem("theme", value);
        theme.set(value);
    }
</script>

<nav class="navbar sticky top-0 z-50">
    <div class="navbar-start">
        <div class="dropdown">
            <button color="ghost" tabIndex={0} class="md:hidden btn btn-ghost">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width={2}
                        d="M4 6h16M4 12h8m-8 6h16"
                    />
                </svg>
            </button>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul
                tabindex="0"
                class={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${""}`}
            >
                {#each links as link}
                    <li>
                        <a
                            class="text-lg"
                            href={link.href}
                            target={link.target}
                        >
                            {link.name}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
        <a href="/" class="btn btn-ghost normal-case text-xl rounded-lg">
            <img
                class={`mr-1 ${$theme === "dark" ? "" : "invert"}`}
                src="/cat.svg"
                alt="wxllow.dev"
                width="32"
                height="32"
            />
            wxllow.dev</a
        >
    </div>
    <!-- <div class="navbar-center hidden lg:flex">
        <ul class="menu px-1">
            <div class="menu-item">
                <a>Item 1</a>
            </div>
        </ul>
    </div> -->
    <div class="navbar-end mr-4">
        <div class="max-md:hidden">
            {#each links as link}
                <a
                    href={link.href}
                    target={link.target}
                    class={`btn normal-case text-lg rounded-lg ${
                        link.href === $page.url.pathname // TODO: To be fixed
                            ? "btn-accent"
                            : "btn-ghost"
                    }`}
                >
                    {link.name}
                </a>
            {/each}
        </div>
        <label class="btn btn-ghost p-2 swap swap-rotate">
            <!-- this hidden checkbox controls the state -->
            <input
                type="checkbox"
                checked={`${$theme}` === "dark"}
                on:click={toggleTheme}
            />

            <!-- sun icon -->
            <svg
                class="swap-on fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                ><path
                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                /></svg
            >

            <!-- moon icon -->
            <svg
                class="swap-off fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                ><path
                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                /></svg
            >
        </label>
    </div>
</nav>
