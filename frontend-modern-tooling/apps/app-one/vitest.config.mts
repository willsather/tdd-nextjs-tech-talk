import { defineConfig } from "vitest/config";
import { browserConfig } from "@repo/vitest-config";

export default defineConfig({
  ...browserConfig,
  test: {
    ...browserConfig.test,
    setupFiles: ["./vitest.setup.mts"],
  },
});
