import { defineConfig } from "vitest/config";
import { nodeConfig } from "@repo/vitest-config";

export default defineConfig({
  ...nodeConfig,
  test: {
    ...nodeConfig.test,
  },
});
