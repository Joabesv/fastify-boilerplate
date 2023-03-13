import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['error', 'warn', 'query'],
  errorFormat: 'pretty',
});

export { prisma };
