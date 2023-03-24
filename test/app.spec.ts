import { it, describe, afterAll, expect } from 'vitest';
import { app } from '../src/app';
describe('App tests', () => {
  afterAll(async () => {
    await app.close();
  });

  it('should hit the base route', async () => {
    const response = await app.inject({ url: '/' });
    expect(response.statusCode).toBe(200);
    expect(response.statusMessage).toBe('OK');
    expect(response.json().msg).toBe('Hello World!');
    expect(response.json().memoryUsage).toBeTypeOf('string');
  });
});
