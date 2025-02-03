import { config as defineConfig, type Config } from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";

import baseConfig from ".";

const recommended: Config = defineConfig(baseConfig, {
  name: "@next/next/recommended",
  plugins: {
    "@next/next": nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
  },
});

const coreWebVitals: Config = defineConfig({
  name: "@next/next/core-web-vitals",
  extends: [recommended],
  rules: {
    ...nextPlugin.configs["core-web-vitals"].rules,
  },
});

export default coreWebVitals;
