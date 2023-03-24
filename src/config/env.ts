import { config as dotEnvConfig } from 'dotenv';
import { logger } from '../app';
import { z } from 'zod';

if (process.env.NODE_ENV === 'test') {
  dotEnvConfig({ path: '.env.test' });
} else {
  dotEnvConfig();
}

const envSchema = z.object({
  DATABASE_URL: z.string(),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  PORT: z.coerce.number().default(5000),
  HOST: z.string().min(4).default('localhost'),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  logger.error('invalid envs', _env.error.format());
  throw new Error('Invalid environments variables');
}

export const config = _env.data;
