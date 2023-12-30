module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-console': 0,
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern:
          '[Rr]eact|[Rr]outer|[Ss]witch|[Rr]oute|LoadingSpinner|ErrorMessage|PokemonPage|PokemonList|Link|PokemonAbility|App',
      },
    ],
  },
}
