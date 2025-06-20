import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const commonSchema = z.object({
  title: z.string().max(30),
  subTitle: z.string().optional(),
  tags: z.string().array().default([]),
  level: z.number().default(0),
  top: z.number().default(0),
  description: z.string().optional(),
  // Transform string to Date object
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  originDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
});

function defineCollectionBy(category: string) {
  return defineCollection({
    loader: glob({
      base: `./content/${category}`,
      pattern: "**/[^_]*.{md,mdx}",
    }),
    schema: commonSchema,
  });
}

export const collections = {
  life: defineCollectionBy("life"),
  xyy: defineCollectionBy("xyy"),
};
