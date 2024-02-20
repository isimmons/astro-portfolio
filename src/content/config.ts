import { defineCollection, z } from "astro:content";
import { featuresCollectionSchema } from "~/schemas/content/featuresCollectionSchema";

const features = defineCollection({
  type: "data",
  schema: featuresCollectionSchema,
});

export const collections = {
  features,
};
