/// <reference types="@sveltejs/kit" />

declare namespace App {
	interface Locals {}
  
	interface PageData {}
  
	interface Platform {}
}


interface Post {
	metadata: PostMetadata;
	content: string;
}

interface PostMetadata {
	title: string;
	description?: string;
	date: string;
	tags: string[];
}
