import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

const config = {
    kit: {
        adapter: adapter(),
    },

    prerender: {
        enabled: true,
    },
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true,
        }),
    ],
};

export default config;
