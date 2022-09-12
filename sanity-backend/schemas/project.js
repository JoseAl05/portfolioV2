export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "array",
      title: "Description",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      title: "Tools",
      name: "tools",
      type: "array",
      of: [
        {
          title: "Tools Details",
          type: "object",
          fields: [
            {
              title: "Tool Name",
              name: "toolName",
              type: "string",
            },
            {
              title: "Tool Color",
              name: "toolColor",
              type: "colorPicker",
            },
          ],
        },
      ],
    },
    {
      title: "Has Documentation?",
      name: "hasDoc",
      type: "boolean",
    },
    {
      title: "Documentation",
      name: "documentation",
      type: "file",
      hidden: ({ document }) => !document?.hasDoc,
    },
    {
      title: "Is in GitHub?",
      name: "hasGit",
      type: "boolean",
    },
    {
      title: "Git URL",
      name: "gitURL",
      type: "url",
      hidden: ({ document }) => !document?.hasGit,
    },
    {
      title: "Is Deployed?",
      name: "isDeployed",
      type: "boolean",
    },
    {
      title: "Site URL",
      name: "siteURL",
      type: "url",
      hidden: ({ document }) => !document?.isDeployed,
    },
    {
      title: "Client",
      name: "client",
      type: "string",
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        }
      ]
    }
  ],
};
