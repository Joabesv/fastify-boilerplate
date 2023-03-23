import { Prisma } from '@prisma/client';
import fastify from 'fastify';
import { ZodError } from 'zod';
import { config } from './config/env';
import { home } from './modules/home';
import { userRoutes } from './modules/user';
import { prettyLog } from './utils/logger';

export const app = fastify({
  logger: { transport: prettyLog },
});
export const logger = app.log;
app.register(home, {
  prefix: '/',
});
app.register(userRoutes, {
  prefix: '/users',
});

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation error',
      issues: error.format(),
    });
  }
  if (config.NODE_ENV !== 'production') {
    reply.log.error(error, 'Unknown error');
  } else {
    // TODO: Move log to external tool, cause production bugs are complicated
  }

  reply.status(500).send({ message: 'Internal server error' });
});

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation error',
      issues: error.format(),
    });
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return reply.status(500).send({
      message: 'Server error',
      issues: {
        message: error.name,
        info: error.meta,
      },
    });
  }

  if (config.NODE_ENV !== 'production') {
    reply.log.error(error, 'Unknown error');
  } else {
    // TODO: Move log to external tool, cause production bugs are complicated
  }

  reply.status(500).send({ message: 'Internal server error' });
});
