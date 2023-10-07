/* eslint-disable @typescript-eslint/ban-ts-comment */
import { error } from "@sveltejs/kit";

// @ts-ignore
export async function load({ params }) {
    try {
        const post = await import(`../../../posts/${params.slug}.md`);

        return {
            metadata: {
                title: post.metadata.title,
                description: post.metadata.excerpt,
            },
            content: post.default,
            meta: post.metadata,
        };
    } catch (e) {
        throw error(404, `Could not find ${params.slug}`);
    }
}
