import { CollectionConfig } from "payload/types";
import SlugField from "../components/fields/SlugField";

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "author",
      label: "Author",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: { components: { Field: SlugField } },
    },
    {
      name: "coverImage",
      label: "Cover Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "content",
      label: "Content",
      type: "richText",
      required: true,
    },
  ],
};

export default Posts;
