import fastify from 'fastify';
import { home } from './modules/home';
import { userRoutes } from './modules/user';
import { prettyLog } from './utils/logger';

export const app = fastify({
  logger: { transport: prettyLog },
});
export const logger = app.log;
app.register(home, {
  prefix: '/',
});
app.register(userRoutes, {
  prefix: '/users',
});
