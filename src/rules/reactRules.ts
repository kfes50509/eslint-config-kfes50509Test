const reactRules: object = {
  'react/react-in-jsx-scope': 'off',
  // <a></a> => <a/>
  'react/self-closing-comp': 'warn',
  // prop 宣告
  'react/prop-types': ['warn', { ignore: [], customValidators: [], skipUndeclared: true }],
  // </div> 與 <div> 對齊
  'react/jsx-closing-tag-location': 'warn',
  // <a> {chirdren} </a> ， chirdren 要比 <a> 還後面一個空格
  'react/jsx-indent': ['warn', 2],
  // <a {...other}/> ， /> 要與 <a 對齊
  'react/jsx-closing-bracket-location': 'warn',
  'react/jsx-no-undef': 'warn',
  'react/jsx-indent-props': ['warn', 2],
  // 給子元件props時，{}裡只有一行時，{}跟值之間不會有空格
  'react/jsx-curly-spacing': [1, { when: 'never' }],
  // 給子元件props時，{}依照一行或多行對齊
  'react/jsx-curly-newline': ['warn', { multiline: 'consistent', singleline: 'consistent' }],
  // <div value={'test'}>{'test1'}</div> ==> <div value="test">test1</div>
  'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
  // function component
  'react/function-component-definition': ['warn', { namedComponents: 'function-declaration' }],
  // d8ai
  'react/require-default-props': 'off',
  'react/prefer-stateless-function': 'off',
  'react/destructuring-assignment': 'off',
  'react/no-access-state-in-setstate': 'off',
  'react/jsx-tag-spacing': ['warn', { beforeClosing: 'never' }],
  'react/jsx-props-no-multi-spaces': 'warn',
  'react/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }],
  'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
  'react/jsx-first-prop-new-line': 'warn',
  'react/jsx-wrap-multilines': [
    'warn', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    },
  ],
  'import/order': [
    'warn',
    {
      'newlines-between': 'never',
      groups: [
        ['builtin', 'external'],
        'internal',
        'parent',
        'sibling',
        'index',
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
      pathGroups: [
        {
          pattern: 'react',
          group: 'external',
          position: 'before',
        },
        {
          pattern: '{react*,react*/**,@react*,@react*/**}',
          group: 'external',
          position: 'before',
        },
        {
          pattern: '@emotion/**',
          group: 'external',
          position: 'after',
        },
        {
          pattern: '@mui/**',
          group: 'external',
          position: 'after',
        },
        {
          pattern: '{images/**}',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '{~/utils,~/utils/**}',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '{~/common*,~/common*/**}',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '{~/context,~/context/**}',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '{~/skills,~/skills/**}',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '{~/styles,~/styles/**}',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '{~/reducers,~/reducers/**}',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '{~/actions,~/actions/**}',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '{~/selectors,~/selectors/**}',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '~/components/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '~/containers/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '~/**',
          group: 'internal',
        },
      ],
    },
  ],
};

export default reactRules;
