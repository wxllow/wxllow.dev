import { getAllPosts } from '$lib/posts';

export function GET() {
    const posts = getAllPosts();

    return {
        body: {
            posts
        }
    }
}
