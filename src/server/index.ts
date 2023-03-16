import fastify, { FastifyInstance } from 'fastify';
import { home } from '../modules/home';
import { prettyLog } from '../utils/logger';

export function buildApp(): FastifyInstance {
  const app = fastify({ logger: { transport: prettyLog } });
  app.register(home, {
    prefix: '/',
  });
  return app;
}
