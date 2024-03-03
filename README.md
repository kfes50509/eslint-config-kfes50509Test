# eslint-config-d8eslint

eslint config包 (測試中...)

`yarn add eslint-config-d8eslint @typescript-eslint/eslint-plugin --dev`

### .eslintrc example
```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '^18.0.2',
    },
  },
  extends: ['d8eslint'],
};
