import { Prisma } from '@prisma/client';
import { prisma } from '@/database/client';

export async function getAll() {
  const users = await prisma.user.findMany();
  return users;
}

export async function getById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });

  return user;
}

export async function postUser(data: Prisma.UserCreateInput) {
  const newUser = prisma.user.create({
    data,
  });
  return newUser;
}

export async function deleteUser(id: string) {
  const deletedUser = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  return deletedUser;
}
