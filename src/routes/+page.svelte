<script>
    import Uses from "./uses.component.svelte";
    import { theme } from "$lib/stores";

    export let data;
</script>

<div class="mx-4 my-2 space-y-8 md:container">
    <div>
        <h1 class="text-5xl font-bold my-4">wxllow.dev</h1>

        <p class="text-xl">
            Hey there, welcome to my little corner of the internet!
        </p>
        <p class="my-2">I am a programmer and tech enthusiast.</p>
        <p class="my-2">
            I code mostly in Go, Rust, and TypeScript but I am also familiar
            with other languages like Python
        </p>
        <div class={`${$theme}` !== "light" ? "hidden" : ""}>
            <p class="my-14 text-3xl text-red-600">
                I̸̲͕̙̙͍̐̍̓̓́ͅ ̶̣̱̭̙̘̄̔̍̎ą̶͔͍̓l̴̡̻̖̬̽s̵̩̮͍̣͔͇̀̑̎ō̴̬̯̬͚̞̗̝̊̀̒̎̋̓͘͝ ̷͔̬͍̬̟́͛̆̓͑͋͋̾͝ã̴̢̨̞̺̖͈̞̐́̈̍̿̏̉ṃ̸̱̳̳̟̥͛ ̵͎̘̤̜̅͊̊̌̄̊͐ȧ̸͉̩̫̲̔͗͑͌̎͠ṅ̸̞ ̷̟̱͂̓͘͝͠a̸̢̛̱̼̘̳̰̲̯͛̐̂̑̕͝v̶̭̹̘̀̆͋̕͠i̸̢̯͇͚̦̠̠̹͂̕d̵̤̠̥̹̙͖͎͒̍̍̎̑͌͘͝ ̶̧̤͔́̾̂͑͊̂h̷̯͈̫͍͈̝͐̈́̋͒̄̂͂̌a̴̳͚̎͗͋t̸̙͍͈̋͑̃͗̊ȩ̵̺̙͙̩͈̀̎̌͆̈́̀̉r̵̹̭̟̹̮̲̩̈́́͒̇͋̀̍̋ ̴͇͈̄̑̀̓ȍ̷͇̱͑̇̒ḟ̷̜̤̖̠̮̜̣̰͔̇́̂͑̾̔̀͠ ̵̻͚̮̣̱̪͙̇̔̔̑̃̾̕͝l̴͙̲͓̹͋̓̈́̏̐̿́͘i̶͍͈͋͗͂̽̋͗̂g̸̪̐̍̒̎̔̕͝͝h̷͚͓̞͈͚̼̭̀͊̀̈́̚t̶͔͎̠̥̯̔́͗̐̉͋́͘ ̵̺̰̗̦͕̞̥̼͒̅̇̎̂͝m̵̢̦̬̠̣̮̿̐́̈́ͅỏ̴̦̻̻͈͕̪͕̹͌̑̀̀̕̚͠ḓ̴͎̞̆e̵̬͙̭͚͖̣̱̗̪̋̑ ̶̹͈̼͚̘͂̑̊ų̵̣̬̺̪̹̼̲̑̔̈̾̓̉͠͠s̷̨͇͎̬̝͔͔̣̲̓͊̂̾̿̋̕̕͘ę̴̻͙̖̎͋̏r̷̘̓̆͑́̅̄̚͝͝ś̶̩̖͝͠.̷̺̬͈͕͂̎̌̾̎͆̇͝.̸̢̝̪͆̐͌͂͑̇̾̌.̷͇̣̝͚̣͙̉̅̑̊̈́͛͝
            </p>
            <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png"
                alt="You've been epicly trolled"
            />
        </div>
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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each data.posts as post}
                <a href={`/blog/${post.slug}`}>
                    <div class="card bg-neutral shadow-xl hover:brightness-90">
                        <div class="card-body">
                            <h2 class="card-title">{post.title}</h2>
                            <p>{post.excerpt}</p>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
    <div id="use">
        <Uses />
    </div>
</div>
