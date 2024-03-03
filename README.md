# eslint-config-d8eslint

eslint config包 (測試中...)

> ## install package to devDependencies
> `yarn add eslint-config-d8eslint @typescript-eslint/eslint-plugin --dev`

---

>>### .eslintrc example
>> _P.S. supply .ts, .js_
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
```

---

>> ### react
>> _P.S. supply .ts, .tsx, .js, .jsx, and the config is contain d8eslint's .js,.ts setting_
```javascript
extends: ['d8eslint/lib/react']
```

---

>> ### .js files
>> _P.S. supply .js_
```javascript
extends: ['d8eslint/lib/js']
```


---

>> ### .ts files
>> _P.S. supply .ts_
```javascript
extends: ['d8eslint/lib/ts']
```