import { z } from "astro:content";

export const featuresCollectionSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().refine((val) => val.startsWith("icon")),
});
