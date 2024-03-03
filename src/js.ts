import { type Linter } from 'eslint';
import { javascriptRules } from './rules';

const config: Linter.Config = {
  overrides: [
    {
      files: ['*.js'],
      extends: ['standard'],
      rules: javascriptRules,
    },
  ],
};

export = config;
