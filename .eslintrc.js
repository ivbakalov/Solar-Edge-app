module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['node-modules', 'dist'],
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],

  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit',
      },
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-constructor',
          'protected-constructor',
          'private-constructor',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
        ],
      },
    ],
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'arrow-parens': ['off', 'always'],

    'id-blacklist': 'off',
    'id-match': 'off',
    'max-len': [
      'off',
      {
        code: 140,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'no-underscore-dangle': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    quotes: [2, 'single', { avoidEscape: true }],
  },
};
