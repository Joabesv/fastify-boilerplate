import { buildApp } from './server';

const app = buildApp();
app.get('/', async (_, reply) => {
  reply.status(200).send('Hello World!');
});

app.listen({ port: 5000 });

export { app };
