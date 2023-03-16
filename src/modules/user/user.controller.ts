import type { FastifyReply, FastifyRequest } from 'fastify';
import { createUserBody, createUserSchema } from './user.schema';
import { getAll, getById, postUser } from './user.service';

export async function listUsers() {
  const users = await getAll();
  return users;
}

export async function listAllUsers(id: number) {
  const user = await getById(id);
  return user;
}

export async function createUser(
  request: FastifyRequest<{ Body: createUserBody }>,
  reply: FastifyReply,
) {
  try {
    const body = createUserSchema.parse(request.body);
    const newUser = await postUser(body);
    request.log.info(newUser, 'User inserted');
    return reply.code(201).send();
  } catch (error) {
    request.log.error(error, 'Error inserting');
    throw error;
  }
}
