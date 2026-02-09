import { defineField, defineType } from "sanity";
import type { Rule } from "sanity";

const category = defineType({
  name: "category",
  title: "Thème",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
  ],
});

export default category;
