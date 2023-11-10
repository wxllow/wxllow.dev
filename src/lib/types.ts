export type Category = "next.js" | "svelte" | "sveltekit";

export interface Post {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    categories: Category[];
    published: boolean;
}
