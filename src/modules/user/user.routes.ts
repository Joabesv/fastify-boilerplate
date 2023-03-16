import type { FastifyInstance } from 'fastify';
import { listUsers } from './user.controller';

export async function userRoutes(app: FastifyInstance) {
  app.get('/', listUsers);
}
