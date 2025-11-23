export const gallery = {
  name: "gallery",
  title: "Gallery Cards",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "mood",
      title: "Mood",
      type: "string",
      options: {
        list: [
          { title: "Minty Leaf", value: "minty-leaf" },
          { title: "Cloudy", value: "cloudy" },
          { title: "Spark", value: "spark" },
        ],
      },
    },
    {
      name: "bgColor",
      title: "Background Color Class",
      type: "string",
    },
    {
      name: "textColor",
      title: "Text Color Class",
      type: "string",
    },
  ],
};
