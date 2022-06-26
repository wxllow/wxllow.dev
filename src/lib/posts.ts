import { readdirSync, readFileSync, existsSync } from 'fs';
import matter from "gray-matter";
import showdown from 'showdown';
import sanitizeHtml from "sanitize-html";
const converter = new showdown.Converter();

let postDir = "./static/posts"

export function getAllPosts() {
    let posts = []

    readdirSync(postDir).forEach(file => {
        const post = getPost(file.replace(".md", ""));

        posts.push(post);
    })

    return posts.sort(({ metadata: a }, { metadata: b }) => {        
        if (a.date < b.date) {
            return 1;
        } else if (a.date > b.date) {
            return -1;
        } else {
            return 0;
        }
    });
}


export function getPost(slug: string) {
    
    if (!existsSync(`${postDir}/${slug}.md`)) {
        return null;
    }

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(readFileSync(`${postDir}/${slug}.md`, 'utf8'));

    // Convert markdown into HTML string
    const contentHtml = sanitizeHtml(converter.makeHtml(matterResult.content), {
        disallowedTagsMode: "escape",
    });

    return {
        slug: slug,
        metadata: matterResult.data,
        content: contentHtml,
    };
}
