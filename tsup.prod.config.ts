import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts'],
  target: ['node16'],
  clean: true,
  minify: true,
  env: {
    NODE_ENV: 'production',
  },
});
