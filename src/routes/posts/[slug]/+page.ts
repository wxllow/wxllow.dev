import type { PageLoad } from './$types';

export const load:PageLoad = async ({ params }) => {
    const post = await import(`../${params.slug}.md`)
  
    return {
        metadata: post.metadata,
        content: post.default,
    }
}
