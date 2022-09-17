export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/posts/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    
    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver() as { metadata: PostMetadata }
            const postPath = path.slice(11, -3)
  
            return {
                metadata,
                path: postPath,
            }
        })
    )
  
    return allPosts
}
