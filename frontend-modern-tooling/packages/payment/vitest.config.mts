import { nodeConfig } from "@repo/vitest-config";
import { defineConfig } from "vitest/config";

export default defineConfig({
  ...nodeConfig,
  test: {
    ...nodeConfig.test,
  },
});
