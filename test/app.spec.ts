import { it, describe, beforeAll, afterAll, expect } from 'vitest';
import { buildApp } from '../src/server';

describe('App tests', () => {
  let app: ReturnType<typeof buildApp>;
  beforeAll(() => {
    app = buildApp();
  });

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
