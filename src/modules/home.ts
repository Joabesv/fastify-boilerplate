import type { FastifyInstance } from 'fastify';
import { formatMemoryUsage } from '@/utils/formatRam';

export async function home(app: FastifyInstance) {
  app.get('/', async (request, reply) => {
    try {
      const memoryUsage = formatMemoryUsage(process.memoryUsage().heapUsed);
      await reply.code(200).send({ memoryUsage, msg: 'Hello World!' });
    } catch (err) {
      app.log.error(err, 'error fetching home');
      throw new Error('Unknown server error');
    }
  });
}
