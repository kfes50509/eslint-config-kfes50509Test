const javascriptRules: object = {
  'max-len': ['warn', { code: 120 }],
  // 強制加分號
  semi: ['warn', 'always'],
  // 標示出console.log
  'no-console': ['warn', { allow: ['error', 'warn'] }],
  // {a:a} => {a}
  'object-shorthand': 'warn',
  // 未使用的宣告
  'no-unused-vars': 'warn',
  // "key-spacing": ["warn",{ "align": "colon" }],
  'key-spacing': ['warn'],
  // 禁止重複宣告，跟禁止宣告全局變量同名：Object、Array、Number
  // "no-shadow": ["warn", { "builtinGlobals": true }],
  // "no-shadow": "warn",
  'comma-spacing': 'warn',
  'padded-blocks': 'warn',
  'space-infix-ops': 'warn',
  'object-curly-spacing': 'warn',
  'no-tabs': 'warn',
  'no-mixed-spaces-and-tabs': 'warn',
  // 宣告後如過下行非宣告，跳行
  'newline-after-var': 'warn',
  // 當 object 內容為2行以上時，強制每個元素(包括括弧)各佔一行
  'object-property-newline': 'warn',
  'object-curly-newline': ['warn', { consistent: true, multiline: true }],
  // 當 array 內容為2行以上時，強制每個元素(包括括弧)各佔一行
  'array-element-newline': ['warn', 'consistent'],
  'array-bracket-newline': ['warn', { multiline: true }],
  'array-bracket-spacing': ['warn', 'never', { arraysInArrays: true }],
  indent: [
    'warn', 2, {
      SwitchCase: 1,
      VariableDeclarator: 'first',
    // foo.bar.baz();
    // "MemberExpression": 0
    },
  ],
  'no-trailing-spaces': 'warn',
  // 運算子除了?跟:外，換行服都是加在後面
  'operator-linebreak': ['warn', 'after', { overrides: { '?': 'before', ':': 'before' } }],
  // && || 混用
  'no-mixed-operators': 'warn',
  'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
  'comma-dangle': ['warn', 'always-multiline'],
  'no-multiple-empty-lines': 'warn',
  'arrow-spacing': 'warn',
  'eol-last': 'warn',
  'function-paren-newline': ['warn', 'multiline-arguments'],
  'block-spacing': 'warn',
  'lines-between-class-members': 'warn',
  'space-before-blocks': 'warn',
  'no-empty-pattern': 'warn',
  camelcase: 0,
  'brace-style': 'warn',
  'keyword-spacing': 'warn',
  'no-multi-spaces': 'warn',
  'arrow-parens': ['warn', 'as-needed'],
  'arrow-body-style': 'warn',
  'semi-spacing': 'warn',
  quotes: 'warn',
  // if, else if, else, for, while, or do，允許無大括號的單行，但仍強制對其他實例使用大括號
  // "curly": ["warn", "multi-line"],
  // 一律強制加大括號
  curly: ['warn', 'all'],
  'prefer-const': 'warn',
  'no-empty': 'warn',
  'no-new': 'warn',
  'quote-props': 'warn',
  'func-call-spacing': 'warn',
  'space-in-parens': 'warn',
  // "Hello, " + name + "!"  =>  `Hello, ${name}!`
  'prefer-template': 'warn',
  // "(foo) =>" 後面不允許換行，除非加上{}
  // 'implicit-arrow-linebreak': 'warn',
  // "? :" 運算子多行時，都要換行
  'multiline-ternary': ['warn', 'always-multiline'],
  // <div value='test'/> ==> <div value="test"/>
  'jsx-quotes': 'warn',
  // 'import/order': [
  //   'warn',
  //   {
  //     'newlines-between': 'never',
  //     groups: [
  //       ['builtin', 'external'],
  //       'internal',
  //       'parent',
  //       'sibling',
  //       'index',
  //     ],
  //     pathGroupsExcludedImportTypes: ['builtin'],
  //     pathGroups: [
  //       {
  //         pattern: 'react',
  //         group: 'external',
  //         position: 'before',
  //       },
  //       {
  //         pattern: '{react*,react*/**,@react*,@react*/**}',
  //         group: 'external',
  //         position: 'before',
  //       },
  //       {
  //         pattern: '@emotion/**',
  //         group: 'external',
  //         position: 'after',
  //       },
  //       {
  //         pattern: '@mui/**',
  //         group: 'external',
  //         position: 'after',
  //       },
  //       {
  //         pattern: '{images/**}',
  //         group: 'internal',
  //         position: 'before',
  //       },
  //       {
  //         pattern: '{~/utils,~/utils/**}',
  //         group: 'internal',
  //         position: 'before',
  //       },
  //       {
  //         pattern: '{~/common*,~/common*/**}',
  //         group: 'internal',
  //         position: 'before',
  //       },
  //       {
  //         pattern: '{~/context,~/context/**}',
  //         group: 'internal',
  //         position: 'before',
  //       },
  //       {
  //         pattern: '{~/skills,~/skills/**}',
  //         group: 'internal',
  //         position: 'before',
  //       },
  //       {
  //         pattern: '{~/styles,~/styles/**}',
  //         group: 'internal',
  //         position: 'before',
  //       },
  //       {
  //         pattern: '{~/reducers,~/reducers/**}',
  //         group: 'internal',
  //         position: 'before',
  //       },
  //       {
  //         pattern: '{~/actions,~/actions/**}',
  //         group: 'internal',
  //         position: 'before',
  //       },
  //       {
  //         pattern: '{~/selectors,~/selectors/**}',
  //         group: 'internal',
  //         position: 'before',
  //       },
  //       {
  //         pattern: '~/components/**',
  //         group: 'internal',
  //         position: 'before',
  //       },
  //       {
  //         pattern: '~/containers/**',
  //         group: 'internal',
  //         position: 'before',
  //       },
  //       {
  //         pattern: '~/**',
  //         group: 'internal',
  //       },
  //     ],
  //   },
  // ],
};

export default javascriptRules;
