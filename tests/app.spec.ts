// import type { FastifyInstance } from 'fastify';
import { it, describe, beforeAll, afterAll, expect } from 'vitest';
import { app } from '../src/app';

describe('App tests', () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should hit the base route', async () => {
    const response = await app.inject({ url: '/' });
    expect(response.statusCode).toBe(200);
    expect(response.statusMessage).toBe('OK');
    expect(response.body).toBe('Hello World!');
  });
});
