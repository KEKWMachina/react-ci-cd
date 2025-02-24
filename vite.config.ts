import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/react-ci-cd/",
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      public: "/public/icons"
    },
  },
  //@ts-expect-error test is working
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],
    testMatch: ["*.test.tsx"],
    globals: true,
  },
});
