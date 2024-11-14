import { browserConfig } from "@repo/vitest-config";
import { defineConfig } from "vitest/config";

export default defineConfig({
  ...browserConfig,
  test: {
    ...browserConfig.test,
    setupFiles: ["./vitest.setup.mts"],
  },
});
