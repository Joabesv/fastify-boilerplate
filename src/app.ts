import { config } from './models/schema';
import { buildApp } from './server';

const app = buildApp();
// i know it's ugly
const { log: logger } = app;
app.get('/', async (_, reply) => {
  reply.status(200).send('Hello World!');
});

app.listen({ port: config.PORT, host: config.HOST });

export { app, logger };
