module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.js'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      extends: 'eslint-config-standard-with-typescript',
      rules: {
        '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
        '@typescript-eslint/strict-boolean-expressions': 'off',
      },
      // extends: ['./lib/index.js'],
    },
  ],
};
