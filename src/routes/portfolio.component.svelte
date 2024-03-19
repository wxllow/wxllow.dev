<script>
    import { theme } from "$lib/stores";
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";

    const langs = {
        rust: {
            name: "Rust",
            icon: "skill-icons:rust",
            color: "#e43717",
        },
        svelte: {
            name: "Svelte",
            icon: "devicon:svelte",
            color: "#ff3e00",
        },
        sveltekit: {
            name: "SvelteKit",
            icon: "devicon:svelte",
            color: "#ff3e00",
        },
        nextjs: {
            name: "Next.JS",
            icon: "devicon:nextjs",
        },
        typescript: {
            name: "TypeScript",
            icon: "skill-icons:typescript",
            color: "#007acc",
        },
        tailwindcss: {
            name: "TailwindCSS",
            icon: "devicon:tailwindcss",
            color: "#38bdf8",
        },
        daisyui: {
            name: "DaisyUI",
            icon: "simple-icons:daisyui",
            color: "#570df8",
        },
        lua: {
            name: "Lua",
            icon: "devicon:lua",
            color: "#007acc",
        },
        python: {
            name: "Python",
            icon: "devicon:python",
            color: "#ffd43b",
        },
        stars61: {
            name: "61+",
            icon: "fluent-emoji-flat:star",
            color: "#fcd53f",
        },
        downloads43k: {
            name: "4.3k+",
            icon: "material-symbols:download",
            color: "#fcd53f",
        },
        react: {
            name: "React",
            icon: "devicon:react",
            color: "#61dafb",
        },
    };

    const categories = {
        web: {
            name: "Web",
            icon: "mdi:web",
        },
        desktop: {
            name: "Desktop App",
            icon: "ic:round-install-desktop",
        },
        other: {
            name: "Other",
            icon: "fluent-mdl2:unknown-solid",
        },
    };

    const portfolio = [
        {
            name: "Cleftly (Alpha)",
            description:
                "Music player focused on aesthetics, speed, and extensibility.",
            link: "https://docs.cleftly.com/",
            src: "https://github.com/wxllow/cleftly",
            langs: ["rust", "svelte", "typescript"],
            category: "desktop",
        },
        {
            name: "GGRetroBox",
            description:
                "The Gaming Subscription Box Tailored to You!\n\nI work on the frontend and backend :)",
            link: "https://ggretrobox.com",
            langs: ["nextjs", "react", "typescript"],
            category: "web",
        },
        {
            name: "Chipate",
            description: "Rust Chip8 Emulator",
            link: "https://github.com/wxllow/chipate",
            src: "https://github.com/wxllow/chipate",
            langs: ["rust"],
            category: "desktop",
        },
        {
            name: "Svelte DaisyUI Toast",
            description: "Simple, beautiful toasts in Svelte with DaisyUI",
            link: "https://svelte-daisy-toast.wxllow.dev/",
            src: "https://github.com/wxllow/svelte-daisy-toast",
            langs: ["svelte", "typescript", "daisyui"],
            category: "other",
        },
        {
            name: "Twillow",
            description: "Modular SMS bot using the Twilio API",
            link: "https://github.com/wxllow/twillow",
            src: "https://github.com/wxllow/twillow",
            langs: ["python", "lua"],
            category: "other",
        },
        {
            name: "wxllow.dev (WIP)",
            description: "This website",
            link: "https://wxllow.dev",
            src: "https://github.com/wxllow/wxllow.dev",
            langs: ["sveltekit", "typescript", "tailwindcss", "daisyui"],
            category: "web",
        },
        {
            name: "AppleMusicRP (Discontinued)",
            description:
                "Discord Rich Presence for Apple Music w/ Album Artwork!",
            link: "https://github.com/wxllow/applemusicrp",
            src: "https://github.com/wxllow/applemusicrp",
            langs: ["downloads43k", "stars61", "python"],
            category: "desktop",
        },
    ];

    let filter = ["web", "desktop"];
    let filteredPortfolio = portfolio;

    let expanded = true;
    let visibleProjects = portfolio;

    onMount(() => {
        expanded = false;
    });

    $: filteredPortfolio =
        filter.length > 0
            ? portfolio.filter((project) => {
                  return filter.some(
                      (category) => project.category === category,
                  );
              })
            : portfolio;

    $: expanded,
        (visibleProjects = expanded
            ? filteredPortfolio
            : filteredPortfolio.slice(0, 6));
</script>

<h2 class="text-4xl font-bold my-4">Portfolio</h2>

<div class="flex flex-wrap gap-2 mb-4">
    {#each Object.entries(categories) as [catk, category]}
        <button
            class="badge badge-lg gap-2 {filter.includes(catk)
                ? 'badge-accent'
                : `badge-neutral ${$theme === 'dark' ? 'text-white' : 'text-black'}`} hover:cursor-pointer hover:brightness-75"
            on:click={() => {
                if (filter.includes(catk)) {
                    filter = filter.filter((f) => f !== catk);
                } else {
                    filter = [...filter, catk];
                }
            }}
        >
            <Icon icon={category.icon} />
            {category.name}
        </button>
    {/each}
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each visibleProjects as project}
        <div class="card bg-neutral shadow-xl hover:brightness-90">
            <div class="card-body">
                <h2 class="card-title">{project.name}</h2>
                <div>
                    <p>{project.description}</p>
                    <div class="mt-2 mb-8 flex gap-2 flex-wrap">
                        {#each project.langs as lang}
                            {#if langs[lang]}
                                <div
                                    class="badge badge-lg gap-2"
                                    style={langs[lang].color
                                        ? `color: ${langs[lang].color};`
                                        : ""}
                                >
                                    <Icon icon={langs[lang].icon} />
                                    {langs[lang].name}
                                </div>
                            {/if}
                        {/each}
                    </div>
                </div>
                <div class="justify-end">
                    <div class="card-actions">
                        {#if project.link}
                            <a
                                href={project.link}
                                target="_blank"
                                class="btn btn-primary rounded-xl w-full px-6"
                            >
                                View
                            </a>
                        {/if}
                        {#if project.src}
                            <a
                                href={project.src}
                                target="_blank"
                                class="btn btn-ghost rounded-xl w-full px-6"
                            >
                                Source Code
                            </a>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    {/each}
</div>
{#if filteredPortfolio.length > 6}
    <div class="text-center">
        <button
            on:click={() => (expanded = !expanded)}
            class="btn {expanded
                ? 'btn-neutral'
                : 'btn-primary'} w-full lg:w-2/3 rounded-xl my-4"
            >Show {expanded ? "Less" : "More"}</button
        >
    </div>
{/if}
