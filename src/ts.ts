import { type Linter } from 'eslint';
import { typescriptRules } from './rules';

const config: Linter.Config = {
  overrides: [
    {
      files: ['*.ts'],
      extends: ['standard-with-typescript'],
      rules: typescriptRules,
    },
  ],
};

export = config;
