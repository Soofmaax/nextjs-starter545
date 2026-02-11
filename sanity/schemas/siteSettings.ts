import { defineField, defineType } from "sanity";

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "brandTitle",
      title: "Nom du cabinet (affiché dans le header)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "brandSubtitle",
      title: "Sous-titre (ligne sous le nom du cabinet)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contactEmail",
      title: "Contact email",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});

export default siteSettings;
