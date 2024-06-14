import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      coverAlt: z.string(),
      web: z.string(),
      repo: z.string(),
      build: z.array(z.string()),
      order: z.number(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
