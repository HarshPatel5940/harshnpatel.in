import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        published: z.boolean().default(true),
        featured: z.boolean().default(false),
        tags: z.array(z.string()).default([]),
        category: z.string(),
        reading_time: z.string(),
        excerpt: z
          .object({
            type: z.string(),
            children: z.any(),
          })
          .optional(),
        image: z.string().optional(),
        external_url: z.string().optional(),
      }),
    }),
  },
});
