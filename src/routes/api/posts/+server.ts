import { fetchMarkdownPosts } from '$lib/posts'
import { json } from '@sveltejs/kit'

export const GET = async () => {  
    const sortedPosts = (await fetchMarkdownPosts()).sort((a, b) => {
        return new Date(b.metadata.date).valueOf() - new Date(a.metadata.date).valueOf()
    })
  
    return json(sortedPosts)
}
