module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'error'
  },
  plugins: ['import', 'prettier'],
  parserOptions: {
    project: 'tsconfig.eslint.json'
  }
};
