import { error } from "@sveltejs/kit";

export async function load({ params }) {
    throw error(500, "Internal Server Error");
}
