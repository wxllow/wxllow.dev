import { process } from '$lib/posts';

export function get({ params }) {
    const { slug } = params;

    const post = process(slug);

    // Raise a 404 error if the post doesn't exist
    if (!post) {
		return {
			status: 404,
		};
	}

    const { metadata, content } = post;

    return {
        body: {
            post: {
                metadata,
                content,
            }
        }
    }
}
