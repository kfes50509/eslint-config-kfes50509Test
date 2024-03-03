module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.js'],
      extends: 'eslint-config-standard-with-typescript',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      rules: {
        '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
        '@typescript-eslint/strict-boolean-expressions': 'off',
      },
    },
  ],
}
