import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  profile: z.object({
    create: z.object({
      bio: z.string().optional(),
    }),
  }),
  post: z.object({
    create: z.object({
      title: z.string().min(4),
      description: z.string().optional(),
      published: z.boolean().default(false),
    }),
  }),
});

export type createUserBody = z.infer<typeof createUserSchema>;
