const { resolve } = require('path');

module.exports = {
  settings: {
    'import/resolver': {
      alias: [
        ['~', 'src'],
      ],
    },
  },

  overrides: [
    // Svelte files
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: resolve(__dirname, 'tsconfig.json'),
        extraFileExtensions: ['.svelte'],
      },
      rules: {
        'import/no-unresolved': 'off',
        'import/first': 'off',
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'no-use-before-define': 'off',
      },
    },

    // Typescript files
    {
      files: ['*.ts'],
      parserOptions: {
        project: resolve(__dirname, 'tsconfig.json'),
      },
    },
  ],

  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
