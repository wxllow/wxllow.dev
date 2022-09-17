import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load:PageLoad = async ({ params }) => {
    let post;

    try {
        post = await import(`../${params.slug}.md`)
    } catch {
        throw error(404, 'Post not found'); 
    }
    
  
    return {
        metadata: post.metadata,
        content: post.default,
    }
}
