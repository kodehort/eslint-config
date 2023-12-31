/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:n/recommended",
    "plugin:perfectionist/recommended-alphabetical",
    "plugin:regexp/recommended",
    "plugin:security/recommended",
    "plugin:vitest/recommended",
    "prettier",
    "turbo",
  ],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      extends: ["plugin:markdown/recommended"],
      files: ["*.md"],
      processor: "markdown/markdown",
    },
    {
      extends: [
        "plugin:jsdoc/recommended-typescript-error",
        "plugin:@typescript-eslint/recommended",
      ],
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      rules: {
        "jsdoc/informative-docs": "error",
        "jsdoc/require-jsdoc": "off",
        "jsdoc/require-param": "off",
        "jsdoc/require-property": "off",
        "jsdoc/require-returns": "off",
        "perfectionist/sort-named-imports": "off",
        "perfectionist/sort-imports": "off",
      },
    },
    {
      excludedFiles: ["*.md/*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
      ],
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      rules: {
        "deprecation/deprecation": "error",
        "@typescript-eslint/no-unnecessary-condition": [
          "error",
          {
            allowConstantLoopConditions: true,
          },
        ],
      },
    },
    {
      excludedFiles: ["package.json"],
      extends: ["plugin:jsonc/recommended-with-json"],
      files: ["*.json", "*.jsonc"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": "error",
      },
    },
    {
      files: ["*.test.{ts,tsx}"],
      rules: {
        // These on-by-default rules aren't useful in test files.
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "n/no-unpublished-import": "off",
      },
    },
    {
      files: "*.cjs",
      rules: {
        "import/no-commonjs": "off",
      },
    },
    {
      extends: ["plugin:yml/standard", "plugin:yml/prettier"],
      files: ["*.{yml,yaml}"],
      parser: "yaml-eslint-parser",
      rules: {
        "yml/file-extension": ["error", { extension: "yml" }],
        "yml/sort-keys": [
          "error",
          {
            order: { type: "asc" },
            pathPattern: "^.*$",
          },
        ],
        "yml/sort-sequence-values": [
          "error",
          {
            order: { type: "asc" },
            pathPattern: "^.*$",
          },
        ],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "deprecation",
    "import",
    "jsdoc",
    "no-only-tests",
    "perfectionist",
    "regexp",
    "vitest",
  ],
  rules: {
    "no-only-tests/no-only-tests": "error",
    "n/no-missing-import": "off",
    "no-case-declarations": "off",
    "no-constant-condition": "off",
    "no-inner-declarations": "off",
    "padding-line-between-statements": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
  },
  reportUnusedDisableDirectives: true,
  /* eslint-enable perfectionist/sort-objects */
};
