import { defineConfig } from "vitest/config";

export const nodeConfig = defineConfig({
  test: {
    globals: true,
    environment: "node",
  },
});
