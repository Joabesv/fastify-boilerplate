import { Prisma } from '@prisma/client';
import { prisma } from '@/database/client';

export async function getAll() {
  const users = await prisma.user.findMany({
    include: {
      profile: true,
    },
  });
  return users;
}

export async function getById(id: number) {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id },
  });
  return user;
}

export async function postUser(data: Prisma.UserCreateInput) {
  const newUser = prisma.user.create({
    data,
  });
  return newUser;
}
