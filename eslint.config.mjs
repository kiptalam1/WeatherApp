import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "arrow-body-style": ["warn", "as-needed"],
    },
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];
