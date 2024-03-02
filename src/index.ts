import { type Linter } from 'eslint'
import { jsRules, tsRules } from './commonRules'

const config: Linter.BaseConfig = {
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly'
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      extends: [
        'plugin:react/recommended',
        'standard'
      ],
      rules: jsRules
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:react/recommended',
        'standard-with-typescript'
      ],
      rules: tsRules
    }
  ]
}

export default config
