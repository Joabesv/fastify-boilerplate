import type { FastifyReply, FastifyRequest } from 'fastify';
import { CreateUserBody, createUserSchema } from './user.schema';
import { deleteUser, getAll, getById, postUser } from './user.service';

export async function listUsers() {
  const users = await getAll();
  return users;
}

export async function listUnique(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
) {
  const { id } = request.params;
  const user = await getById(id);

  if (user === null) {
    reply.status(404).send({ message: 'User not found', user });
    return;
  }

  await reply.status(200).send(user);
}

export async function createUser(
  request: FastifyRequest<{ Body: CreateUserBody }>,
  reply: FastifyReply,
) {
  try {
    const body = createUserSchema.parse(request.body);
    const newUser = await postUser(body);
    request.log.info(newUser, 'User inserted');
    return reply.status(201).send();
  } catch (error) {
    request.log.error(error, 'Error inserting');
    throw error;
  }
}

export async function removeUser(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
) {
  try {
    const { id } = request.params;
    const removedUser = await deleteUser(id);
    reply.log.info(removedUser, 'User removed successfully');
    return reply.status(204).send();
  } catch (error) {
    request.log.error(error, 'Error in delete');
    throw error;
  }
}
