import { z } from "zod";

export const roadmapSchema = z.object({
  title: z.string(),
  short_description: z.string(),
  content: z.string(),
  date: z.string(),
  author: z.string(),
  published: z.boolean(),
  images: z.array(z.string()).max(3, { message: "Maximum of 3 images allowed" }).min(1, { message: "At least 1 image is required" }),
});
