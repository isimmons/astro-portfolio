import { defineCollection, z } from "astro:content";
import { featuresCollectionSchema } from "~/schemas/content/featuresCollectionSchema";
import { projectsCollectionSchema } from "~/schemas/content/projectsCollectionSchema";
import { toolsCollectionSchema } from "~/schemas/content/toolsCollectionSchema";

const features = defineCollection({
  type: "data",
  schema: featuresCollectionSchema,
});

const tools = defineCollection({
  type: "data",
  schema: toolsCollectionSchema,
});

const projects = defineCollection({
  type: "data",
  schema: projectsCollectionSchema,
});

export const collections = {
  features,
  tools,
  projects,
};
