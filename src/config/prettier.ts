import configPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

import { defineConfig } from "../util/define-config.js";

export const prettierThisMustBePutLast = defineConfig([
  {
    name: "prettier/recommended",
    plugins: { prettier: pluginPrettier },
    rules: configPrettier.rules,
  },
]);
