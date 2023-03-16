import type { FastifyReply, FastifyRequest } from 'fastify';
import { getAll } from './user.service';

export async function listUsers() {
  const users = await getAll();
  return users;
}
