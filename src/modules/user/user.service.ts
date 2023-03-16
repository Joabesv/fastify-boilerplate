import { prisma } from '@/database/client';

export async function getAll() {
  const users = await prisma.user.findMany();
  return users;
}
