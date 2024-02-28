module.exports = {
  env:{
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: [
    '@stylistic',
    'import',
    'modules-newlines',
    'vue',
    'prettier',
  ],
  parserOptions: {ecmaVersion: 2020,},
  rules: {
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/semi': 'error',
    '@stylistic/member-delimiter-style': ['error'],
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/brace-style': 'error',
    '@stylistic/linebreak-style': ['error', 'unix'],
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    '@stylistic/object-curly-newline': ['error', {
      ObjectExpression: {
        multiline: true,
        minProperties: 2,
        consistent: true,
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 2,
      },
      ImportDeclaration: {
        multiline: true,
        consistent: true,
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 2,
        consistent: true,
      },
    }],
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-empty-component-block': 'error',
    'vue/block-order': ['error', {
      'order': ['script', 'template', 'style'],
    }],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/no-v-html': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    complexity: ['error', 10],
    'modules-newlines/import-declaration-newline': 'error',
    'modules-newlines/export-declaration-newline': 'error',
    'import/order': ['error', {
      'newlines-between': 'never',
      pathGroups: [
        {
          pattern: '@/**',
          group: 'internal',
          position: 'after',
        },
      ],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      pathGroupsExcludedImportTypes: ['builtin'],
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    }],
    'import/newline-after-import': ['error', { 'count': 1 }],
    'import/no-cycle': 'error',
    'no-restricted-imports': ['error', {
      patterns: ['src/*'],
    }],
    'no-restricted-syntax': [
      'error',
      {
        selector: "ImportDeclaration[specifiers] > ImportSpecifier[imported.name=default]",
        message: 'Используйте import foo from "foo" для импортов по дефолту'
      }
    ],
  },
};
