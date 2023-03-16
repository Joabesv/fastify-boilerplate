import { app } from './app';
import { config } from './config/env';
// i know it's ugly
app.listen({ port: config.PORT, host: config.HOST });
