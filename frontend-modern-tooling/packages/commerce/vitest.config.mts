import { nodeConfig } from "@repo/vitest-config";
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  ...nodeConfig,
  test: {
    ...nodeConfig.test,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
