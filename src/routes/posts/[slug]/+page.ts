export const load = async ({ data: props }) => {
	return {
	    props,
	    metadata: { "title": props.post.metadata.title, "description": props.post.metadata.description, "type": "article"}
	}
}
