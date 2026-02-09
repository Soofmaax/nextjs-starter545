import { defineField, defineType } from "sanity";

const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "status",
      title: "Statut de publication",
      type: "string",
      options: {
        list: [
          { title: "Brouillon", value: "draft" },
          { title: "Publié", value: "published" },
        ],
      },
      initialValue: "published",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    }),
    defineField({
      name: "seoTitle",
      title: "Titre SEO (optionnel)",
      type: "string",
    }),
    defineField({
      name: "authors",
      title: "Auteurs",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "author" }],
        },
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});

export default post;
