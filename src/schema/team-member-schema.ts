import {z} from 'zod';

const socialMediaSchema = z.object({
  value: z.string(),
  href: z.string().url(),
});

const imgSchema = z.object({
  src: z.string(),
  alt: z.string(),
});

export const TeamMemberSchema = z.object({
  name: z.string(),
  description: z.string(),
  img: imgSchema,
  socialMedia: z.array(socialMediaSchema),
  patherdstreamer: z.boolean(),
  staff: z.boolean(),
});