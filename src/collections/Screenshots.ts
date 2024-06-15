import { CollectionConfig } from "payload/types";

const Screenshots: CollectionConfig = {
  slug: "screenshots",
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
      name: "game",
      label: "Game",
      type: "select",
      options: [
        {
          label: "Elden Ring",
          value: "elden-ring",
        },
        {
          label: "Ghosts of Tsushima",
          value: "ghosts-of-tsushima",
        },
        {
          label: "Cyberpunk 2077",
          value: "cyberpunk-2077",
        },
      ],
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
    },
  ],
};

export default Screenshots;