 // PUBLIC_INTERFACE
 /**
  * ESLint flat config for the Tailwind Migration project.
  * - Targets modern browsers via Vite (ESM).
  * - Uses @eslint/js recommended rules.
  * - Integrates Prettier for formatting consistency without top-level await.
  */
import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly"
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-console": "off"
    }
  },
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      // Defer stylistic concerns to Prettier and raise formatting issues as lint errors
      "prettier/prettier": "error"
    }
  }
];
