import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

export const browserConfig = defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
