module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    './.eslintrc-auto-import.json',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-irregular-whitespace': 'off',
    'vue/no-mutating-props': 'off',
    'vue/multi-word-component-names': 'off',
    'no-useless-escape': 0 // 禁止不必要的转义字符
  }
}
