module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: 'airbnb',
  parserOptions: {
  ecmaVersion: 'latest',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'no-console': 0,
    'linebreak-style': 0,
    'comma-spacing': ['error', { before: false, after: true }],
    'trailing-comma': [true, {
    singleline: 'never',
    multiline: {
    objects: 'always',
    arrays: 'always',
    functions: 'never',
    typeLiterals: 'ignore',
      },
    }],
  },
};
