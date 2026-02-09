import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const client = createClient({
  projectId: projectId || "",
  dataset: dataset || "",
  apiVersion,
  useCdn: true,
});

export type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
};

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt
}`;

export async function getPosts(): Promise<SanityPost[]> {
  if (!projectId || !dataset) {
    return [];
  }

  try {
    const posts = await client.fetch<SanityPost[]>(POSTS_QUERY);
    return posts;
  } catch {
    return [];
  }
}
