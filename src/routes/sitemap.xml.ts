import { getAllPosts } from "$lib/posts"
import header from "../components/header";

const website = "https://wxllow.dev" // The URL of the website

export function get() {
    return {
        headers: {
            'Content-Type': 'application/xml', 
        },
        body: `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
            <!-- Get page URLs from header JSON file -->
            ${header.map(page => {
                return `
                <url>
                    <loc>${website}${page.url}</loc>
                    <changefreq>weekly</changefreq>
                    <priority>0.8</priority>
                </url>`}).join('')}
            <!-- Get post URLs -->
            ${getAllPosts().map(post => {
                return `<url>
                    <loc>${website}/posts/${post.slug}</loc>
                    <changefreq>weekly</changefreq>
                    <priority>0.8</priority>
                    <lastmod>${post.date}</lastmod>
                </url>`}).join('')}
        </urlset>`,
    }
}
