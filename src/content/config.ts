import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      coverAlt: z.string(),
      web: z.string(),
      repo: z.string(),
      build: z.string(),
      style: z.string(),
      tag: z.string(),
    }),
});

export const collections = {
  projects,
};
