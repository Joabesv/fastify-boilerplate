import fastify from 'fastify';
import { prettyLog } from '../utils/logger';

export function buildApp() {
  const app = fastify({ logger: { transport: prettyLog } });

  return app;
}
