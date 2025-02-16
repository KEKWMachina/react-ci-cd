import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/react-ci-cd",
  plugins: [react()],
  //@ts-expect-error test is working
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],
    testMatch: ["*.test.tsx"],
    globals: true,
  },
});
