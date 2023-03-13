import { config } from './models/schema';
import { buildApp } from './server';
import { formatMemoryUsage } from './utils/formatRam';

const app = buildApp();
// i know it's ugly
const { log: logger } = app;
app.get('/', async (_, reply) => {
  const memoryUsage = formatMemoryUsage(process.memoryUsage().heapUsed);
  reply.status(200).send({ memoryUsage, msg: 'Hello World!' });
});

app.listen({ port: config.PORT, host: config.HOST });

export { app, logger };
