import {
  config as defineConfig,
  parser,
  type ConfigArray,
} from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import babelParser from "@babel/eslint-parser";

const baseConfig: ConfigArray = defineConfig(
  {
    name: "next:flat/recommended",
    extends: [
      {
        name: "react/recommended",
        ...reactPlugin.configs.flat?.recommended,
        settings: {
          react: {
            version: "detect",
          },
        },
      },
      {
        name: "react-hooks/recommended",
        plugins: {
          "react-hooks": reactHooksPlugin,
        },
        rules: {
          ...reactHooksPlugin.configs.recommended.rules,
        },
      },
      {
        name: "@next/next/recommended",
        plugins: {
          "@next/next": nextPlugin,
        },
        rules: {
          ...nextPlugin.configs.recommended.rules,
        },
      },
    ],
    plugins: {
      import: importPlugin,
      "jsx-a11y": jsxA11yPlugin,
      react: reactPlugin,
    },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        sourceType: "module",
        allowImportExportEverywhere: true,
        babelOptions: {
          presets: ["next/babel"],
          caller: {
            supportsTopLevelAwait: true,
          },
        },
      },
    },
    rules: {
      // NOTE: fail import because of @rushstack/eslint-patch/modern-module-resolution
      "import/no-anonymous-default-export": "warn",
      "react/no-unknown-property": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      "react/jsx-no-target-blank": "off",
    },
    settings: {
      "import/parsers": {
        [parser as any]: [".ts", ".mts", ".cts", ".tsx", ".d.ts"],
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        typescript: true,
      },
    },
  },
  {
    files: ["**/*.ts?(x)"],
    languageOptions: {
      parser,
      parserOptions: {
        sourceType: "module",
      },
    },
  }
);

export default baseConfig;
