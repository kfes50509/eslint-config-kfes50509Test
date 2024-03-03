import { type Linter } from 'eslint';
import {
  javascriptRules,
  // reactRules,
  typescriptRules,
} from './rules';

// const config: Linter.Config = {
//   // env: {
//   //   browser: true,
//   //   es2021: true,
//   // },
//   // parserOptions: {
//   //   ecmaVersion: 'latest',
//   //   sourceType: 'module',
//   // },
//   // globals: {
//   //   document: 'readonly',
//   //   navigator: 'readonly',
//   //   window: 'readonly',
//   // },
//   // parserOptions: {
//   //   project: true,
//   // },
//   overrides: [
//     {
//       files: ['*.js', '*.jsx'],
//       extends: [
//         'plugin:react/recommended',
//         'standard',
//       ],
//       rules: Object.assign({}, javascriptRules, reactRules),
//     },
//     {
//       files: ['*.ts', '*.tsx'],
//       extends: [
//         'plugin:react/recommended',
//         'standard-with-typescript',
//       ],
//       rules: Object.assign({}, typescriptRules, reactRules),
//     },
//   ],
// };

const config: Linter.Config = {
  overrides: [
    {
      files: ['*.js'],
      extends: ['standard'],
      rules: javascriptRules,
    },
    {
      files: ['*.ts'],
      extends: ['standard-with-typescript'],
      rules: typescriptRules,
    },
  ],
};

export = config;
