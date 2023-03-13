import fastify, { FastifyInstance } from 'fastify';
import { prettyLog } from '../utils/logger';

export function buildApp(): FastifyInstance {
  const app = fastify({ logger: { transport: prettyLog } });

  return app;
}
