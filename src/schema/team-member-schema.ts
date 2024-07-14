import {string, z} from 'zod';

const socialMediaSchema = z.object({
  value: z.string(),
  href: z.string().url(),
});

const imgSchema = z.object({
  src: z.string(),
  alt: z.string(),
});

export const TeamMemberSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
  description: z.string(),
  img_url: string(),
  socialMedia: z.array(socialMediaSchema),
  patherdstreamer: z.boolean(),
  staff: z.boolean(),
});