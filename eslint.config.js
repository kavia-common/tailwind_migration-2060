 // PUBLIC_INTERFACE
 /**
  * ESLint flat config for the Tailwind Migration project.
  * - Targets modern browsers via Vite (ESM).
  * - Uses @eslint/js recommended rules.
  * - Integrates Prettier for formatting consistency.
  */
 import js from "@eslint/js";

 export default [
   {
     files: ["**/*.js"],
     languageOptions: {
       ecmaVersion: 2022,
       sourceType: "module",
       globals: {
         window: "readonly",
         document: "readonly",
         console: "readonly",
       },
     },
     rules: {
       ...js.configs.recommended.rules,
       "no-console": "off",
     },
   },
   {
     rules: {
       // Defer all stylistic concerns to Prettier
       "prettier/prettier": ["error"],
     },
     plugins: {
       // dynamic import works in flat config; eslint will resolve plugin
       prettier: await import("eslint-plugin-prettier"),
     },
   },
 ];
