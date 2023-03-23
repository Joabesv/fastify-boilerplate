import type { FastifyInstance } from 'fastify';
import {
  createUser,
  listUnique,
  listUsers,
  removeUser,
} from './user.controller';

export async function userRoutes(app: FastifyInstance) {
  app.post('/', createUser);
  app.get('/', listUsers);
  app.get('/:id', listUnique);
  app.delete('/:id', removeUser);
}
