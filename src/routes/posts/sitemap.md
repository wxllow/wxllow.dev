---
title: 'Making a Sitemap with SvelteKit'
date: '2022-06-26'
description: "How I made a sitemap for my SvelteKit blog site!"
categories: ["svelte", "sveltekit", "javascript", "typescript", "web"]
---

An important thing for ranking on search engines is to have a sitemap to tell search engines what pages are available on your website.

For simple Svelte websites, you can use use a tool like [svelte-sitemap](https://github.com/bartholomej/svelte-sitemap)

```shell
npx svelte-sitemap --domain https://wxllow.dev
```

However, for more complex SvelteKit sites like a blog, you need to make your own sitemap script to generate the sitemap with all of your pages and posts.

## Structure

Here is the structure of my blog right now (before adding the sitemap stuff)

```tree
├── README.md
├── package.json
├── postcss.config.cjs
├── src
│   ├── app.css
│   ├── app.d.ts
│   ├── app.html
│   ├── components
│   │   ├── header.svelte
│   │   └── header.ts
│   ├── lib
│   │   └── posts.ts
│   └── routes
│       ├── __error.svelte
│       ├── __layout.svelte
│       ├── about.svelte
│       ├── index.svelte
│       ├── posts
│       │   ├── [slug].svelte
│       │   ├── [slug].ts
│       │   ├── index.svelte
│       │   └── index.ts
│       ├── projects.svelte
│       └── socials.svelte
├── static
│   └── posts
│       ├── matrix.md
│       ├── redesigned.md
│       └── sitemap.md
├── svelte.config.js
├── tailwind.config.cjs
├── tsconfig.json
└── vercel.json
```

## Creating the Sitemap

First of all, we need to create a new file called `sitemap.xml.ts` in the `src/routes` folder.

```ts
const website = "https://wxllow.dev" // The URL of the website

export function get() {
    return {
        headers: {
            'Content-Type': 'application/xml', 
        },
        body: `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
        <url> <!-- An example URL -->
            <loc>${website}/</loc>
            <lastmod>1970-01-01</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
        </url>
        </urlset>`,
    }
}

```

We could go and add all of our pages manually to our sitemap, but that would not be very efficient and wouldn't scale well.

## Adding routes to the Sitemap

For the pages on my site, I already have a file with all of the pages, so I can use that to generate the sitemap.

Here is how that file looks

```ts
export default [
    {
        "name": "Home",
        "url": "/"
    },
    {
        "name": "Blog",
        "url": "/posts"
    },
    {
        "name": "About Me",
        "url": "/about"
    }
]
```

You could also just use a JSON file to store the pages, but I prefer to use a TS file because it is easier to edit.

I added these pages to my sitemap file in the `src/routes` folder.

```ts
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
        </urlset>`,
    }
}
```

## Adding blog posts to the Sitemap

I also already had a function to list all of the posts, so I can use that to add the posts to the sitemap.

```ts
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

```

## Final Steps

We now have a sitemap of the posts and pages on our site.

Don't forget to add the sitemap to your robots.txt file.

```txt
Sitemap: https://wxllow.dev/sitemap.xml
```
