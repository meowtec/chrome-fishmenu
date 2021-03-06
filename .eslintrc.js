module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: ['airbnb-typescript/base'],
  rules: {
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
  },
  overrides: [
    {
      files: ['**/*.js'],
      parser: 'espree',
    },
  ],
};
