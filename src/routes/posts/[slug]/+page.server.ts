import { getPost } from '$lib/posts';
import { error } from '@sveltejs/kit';

export function load({ params }) {
    const { slug } = params;

    const post = getPost(slug);

    // Raise a 404 error if the post doesn't exist
    if (!post) {
        throw error(404, 'Not found');
	}

    const { metadata, content } = post;

    return {
        post: {
            metadata,
            content,
        }
    }
}
