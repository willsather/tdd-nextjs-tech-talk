import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export const browserConfig = defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
