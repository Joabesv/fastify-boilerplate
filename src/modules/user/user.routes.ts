import type { FastifyInstance } from 'fastify';
import { createUser, listUsers } from './user.controller';

export async function userRoutes(app: FastifyInstance) {
  app.get('/', listUsers);
  app.post('/', createUser);
}
