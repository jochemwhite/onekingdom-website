import {z} from 'zod';

export const contactSchema = z.object({
  name: z.string().min(3).max(100),
  discord: z.string().min(2).max(32),
  twitch: z.string().min(3).max(25),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});