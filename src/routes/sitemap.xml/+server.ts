import { fetchMarkdownPosts } from "$lib/posts";
import header from "../../components/header";

const website = "https://wxllow.dev" // The URL of the website

export async function GET() {
    return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
            <!-- Page URLs -->
            ${header.map(page => {
                return `
                <url>
                    <loc>${website}${page.url}</loc>
                    <changefreq>weekly</changefreq>
                    <priority>0.8</priority>
                </url>`}).join('')}
            <!-- Post URLs -->
            ${(await fetchMarkdownPosts()).map(post => {
                return `<url>
                    <loc>${website}${post.path}</loc>
                    <changefreq>weekly</changefreq>
                    <priority>0.8</priority>
                    <lastmod>${post.metadata.date || ""}</lastmod>
                </url>`}).join('')}
        </urlset>`, {
        headers: {
            'Content-Type': 'application/xml', 
        }
    })
}
