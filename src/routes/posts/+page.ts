export const load = (data) => {
    return {
        posts: data.data.posts,
        metadata: { title: "Posts", description: "Posts by wxllow" },
    };
};
