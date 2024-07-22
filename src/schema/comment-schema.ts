import {z} from 'zod';

export const CommentSchema = z.object({
  id: z.string(),
  content: z.string(),
  user_id: z.string(),
  post_id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});