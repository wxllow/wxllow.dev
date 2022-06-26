import { getAllPosts } from '$lib/posts';

export function get() {
    const posts = getAllPosts();

    return {
        body: {
            posts
        }
    }
}
