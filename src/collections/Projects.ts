import { CollectionConfig } from "payload/types";

const Projects: CollectionConfig = {
  slug: "projects",
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
      name: "description",
      label: "Description",
      type: "richText",
    },
    {
      type: "row",
      fields: [
        {
          name: "category",
          label: "Category",
          type: "select",
          required: true,
          options: [
            {
              label: "Web Development",
              value: "web-development",
            },
            {
              label: "Game Development",
              value: "game-development",
            },
          ],
        },
        {
          name: "status",
          label: "Status",
          type: "select",
          required: true,
          options: [
            {
              label: "In Progress",
              value: "in-progress",
            },
            {
              label: "Completed",
              value: "completed",
            },
          ],
        },
      ]
    },
    {
      name: "link",
      label: "Link",
      type: "text",
    },
    {
      name: "images",
      label: "Images",
      type: "relationship",
      relationTo: "media",
      hasMany: true,
    },
  ],
};

export default Projects;