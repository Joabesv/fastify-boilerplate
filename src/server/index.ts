import fastify from 'fastify';

export function buildApp() {
  const app = fastify({ logger: { transport: { target: 'pino-pretty' } } });

  return app;
}
