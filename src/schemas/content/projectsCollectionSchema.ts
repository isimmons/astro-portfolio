import { reference, z, type SchemaContext } from "astro:content";

export const projectsCollectionSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    thumbnail: image(),
    icons: z.array(reference("tools")),
    url: z.string().url(),
  });
