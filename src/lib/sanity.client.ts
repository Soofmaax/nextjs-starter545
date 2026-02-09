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
  categoryTitle?: string;
  categorySlug?: string;
  authors?: { _id: string; name: string; role?: string }[];
};

export type SanityPostWithBody = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  body?: any;
  authors?: { _id: string; name: string; role?: string }[];
  categoryTitle?: string;
  categorySlug?: string;
};

const POSTS_QUERY = `*[_type == "post" && defined(slug.current) && (status == "published" || !defined(status))]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    "categoryTitle": category->title,
    "categorySlug": category->slug.current,
    authors[]->{ _id, name, role }
  }`;

const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug && (status == "published" || !defined(status))][0]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  body,
  authors[]->{ _id, name, role },
  "categoryTitle": category->title,
  "categorySlug": category->slug.current
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

export async function getPostBySlug(slug: string): Promise<SanityPostWithBody | null> {
  if (!projectId || !dataset) {
    return null;
  }

  if (!slug) {
    return null;
  }

  try {
    const post = await client.fetch<SanityPostWithBody | null>(POST_BY_SLUG_QUERY, { slug });
    return post ?? null;
  } catch {
    return null;
  }
}

export async function getPostsByCategorySlug(
  categorySlug: string,
): Promise<SanityPost[]> {
  if (!projectId || !dataset) return [];
  if (!categorySlug) return [];

  const query = `*[_type == "post" && defined(slug.current) && category->slug.current == $categorySlug && (status == "published" || !defined(status))]
    | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      "categoryTitle": category->title,
      "categorySlug": category->slug.current,
      authors[]->{ _id, name, role }
    }`;

  try {
    return await client.fetch<SanityPost[]>(query, { categorySlug });
  } catch {
    return [];
  }
}

export async function getRelatedPosts(slug: string): Promise<SanityPost[]> {
  if (!projectId || !dataset) {
    return [];
  }

  if (!slug) {
    return [];
  }

  try {
    const currentPost = await getPostBySlug(slug);

    if (!currentPost) {
      return [];
    }

    const categorySlug = currentPost.categorySlug?.trim() || null;
    const authorIds = (currentPost.authors ?? [])
      .map((author) => author._id)
      .filter((id): id is string => Boolean(id));

    if (!categorySlug && authorIds.length === 0) {
      return [];
    }

    const query = `*[_type == "post" && defined(slug.current) && slug.current != $slug && (status == "published" || !defined(status))
      && (
        category->slug.current == $categorySlug ||
        count((authors[]._ref)[@ in $authorIds]) > 0
      )]
      | order(publishedAt desc)[0...3] {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        excerpt,
        "categoryTitle": category->title,
        "categorySlug": category->slug.current,
        authors[]->{ _id, name, role }
      }`;

    const relatedPosts = await client.fetch<SanityPost[]>(query, {
      slug,
      categorySlug,
      authorIds,
    });

    return relatedPosts ?? [];
  } catch {
    return [];
  }
}
