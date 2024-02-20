import { z } from "astro:content";

export const toolsCollectionSchema = z.object({
  title: z.string(),
  icon: z.string().refine((val) => val.startsWith("icon")),
});
