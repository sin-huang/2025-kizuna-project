import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import json from "@eslint/json";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

// ESM 中使用 await import 取代 require
const vueParser = (await import("vue-eslint-parser")).default;

export default defineConfig([
  // JavaScript 檔案
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { 
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // 禁止 console.log 只允許 warn / error
      // "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },

  // 只對 vue 檔案套用 pluginVue
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { vue: pluginVue },
    rules: {
      ...pluginVue.configs["flat/essential"].rules,
      // "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
  // JSON 檔案
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
    ignores: ["package-lock.json"]
  },
  // CSS 檔案
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
]);
