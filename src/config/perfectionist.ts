import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";

import { defineConfig } from "../util/define-config.js";

export const perfectionist = defineConfig([
  {
    ...perfectionistNatural,
    name: "perfectionist/natural",
  },
  {
    name: "perfectionist/override",
    rules: {
      "perfectionist/sort-named-imports": "off",
      "perfectionist/sort-imports": "off",
    },
  },
]);
