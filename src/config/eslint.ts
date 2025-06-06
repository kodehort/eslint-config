import eslintJs from '@eslint/js'

import { defineConfig } from '../util/define-config.js'

export const eslint = defineConfig([
  {
    ...eslintJs.configs.recommended,
    name: 'eslintJs/recommended',
  },

  {
    name: 'eslintJs/overrides',
    rules: {
      'no-console': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-destructuring': [
        'error',
        { VariableDeclarator: { object: true } },
        { enforceForRenamedProperties: false },
      ],
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'locale-dates',
              message:
                'Please avoid using Luxon or Moment in favor of js-joda/core',
            },
          ],
          patterns: ['luxon', 'moment'],
        },
      ],
    },
  },
])
