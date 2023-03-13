import type { FastifyInstance } from 'fastify';
import { formatMemoryUsage } from '../utils/formatRam';

export async function home(app: FastifyInstance) {
  app.get('/', async (request, reply) => {
    try {
      request.log.info('base route got hit');
      const memoryUsage = formatMemoryUsage(process.memoryUsage().heapUsed);
      return reply.code(200).send({ memoryUsage, msg: 'Hello World!' });
    } catch (err) {
      app.log.error(err, 'error fetching home');
    }
  });
}
