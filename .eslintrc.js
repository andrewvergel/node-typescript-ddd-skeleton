module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: ['airbnb-typescript/base', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'prettier/prettier': ['error', { printWidth: 120 }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true
        }
      }
    ],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-throw-literal': 'off'
  },
  plugins: ['import', 'prettier'],
  parserOptions: {
    project: 'tsconfig.eslint.json'
  }
};
