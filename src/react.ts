import { type Linter } from 'eslint';
import {
  javascriptRules,
  reactRules,
  typescriptRules,
} from './rules';

const reactConfig: Linter.Config = {
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      extends: [
        'plugin:react/recommended',
        'standard',
      ],
      rules: Object.assign({}, javascriptRules, reactRules),
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
      ],
      rules: Object.assign({}, typescriptRules, reactRules),
    },
  ],
};

export = reactConfig;
