import { describe, expect, it } from 'vitest';
import { formatMemoryUsage } from '../../src/utils/formatRam';

describe('Ram usage', () => {
  it('should receive a number and return a string', () => {
    const { heapUsed } = process.memoryUsage();
    const value = formatMemoryUsage(heapUsed);
    expect(value).toBeTypeOf('string');
  });
});
