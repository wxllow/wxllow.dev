<script>
    import Uses from "./uses.component.svelte";
    import Portfolio from "./portfolio.component.svelte";
    import { theme } from "$lib/stores";
    import Contact from "./contact.componet.svelte";
    import Icon from "@iconify/svelte";

    export let data;
</script>

<div class="mx-4 my-8 md:mx-8">
    <div class=" my-2 space-y-8 md:container">
        <div class="md:w-2/3">
            <p
                class="font-extrabold text-5xl leading-[1.2] md:text-6xl bg-gradient-to-r from-pink-500 via-[#5b8eff] to-[#00cbbc] inline-block text-transparent bg-clip-text my-1"
            >
                Hey there, I'm Willow!
            </p>
            <p
                class="my-2 text-2xl font-semibold bg-gradient-to-r {$theme ===
                'dark'
                    ? 'from-gray-300 to-white'
                    : 'from-gray-700 to-black'}text-transparent bg-clip-text"
            >
                I am a full stack developer from Orlando, FL, with expertise
                coding in TypeScript, JavaScript, Go, and Rust. I use tools such
                as Svelte, React, etc. to make high performance websites and
                webapps from scratch.
            </p>
            <div class="space-x-2 space-y-2">
                <a
                    class="btn btn-ghost normal-case text-lg rounded-lg bg-white py-0"
                    href="https://github.com/wxllow"
                    target="_blank"
                >
                    <Icon icon="devicon:github" color="black" />
                </a>
                <a
                    class="btn btn-ghost normal-case text-lg rounded-lg bg-[#5865F2] py-0"
                    href="https://discord.com/users/229710046706139139"
                    target="_blank"
                >
                    <Icon icon="mdi:discord" color="black" />
                </a>
                <a
                    class="btn btn-ghost normal-case text-lg rounded-lg bg-purple-500 py-0"
                    href="mailto:willow@wxllow.dev"
                    target="_blank"
                >
                    <Icon icon="mdi:email" color="black" />
                </a>
            </div>
        </div>
        <div id="blog" class="section">
            <h2 class="text-4xl font-bold my-4">Blog</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each data.posts as post}
                    <a href={`/blog/${post.slug}`}>
                        <div
                            class="card bg-neutral shadow-xl hover:brightness-90"
                        >
                            <div class="card-body">
                                <h2 class="card-title">{post.title}</h2>
                                <p>{post.excerpt}</p>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
        <div id="portfolio" class="section">
            <Portfolio />
        </div>
        <div id="contact" class="section">
            <Contact />
        </div>
        <!-- <div id="use" class="section">
            <Uses />
        </div> -->
    </div>
</div>
