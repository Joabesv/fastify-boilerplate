import { configDefaults, defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'node',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    coverage: { provider: 'c8' },
  },
});
