import adapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";

const config = {
    kit: {
        adapter: adapter({
            out: "build",
        }),
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
