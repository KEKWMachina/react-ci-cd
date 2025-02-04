import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //@ts-ignore
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],
    testMatch: ["*.test.tsx"],
    globals: true,
  },
});
