import javascriptRules from './javascriptRules';

const typescriptEslintKey: string[] = [
  'semi',
  'no-unused-vars',
  'indent',
  'comma-dangle',
  'space-before-function-paren',
];

// const typescriptEslintKey: string[] = [
//   'block-spacing',
//   'comma-spacing',
//   'dot-notation',
//   'brace-style',
//   'func-call-spacing',
//   'indent',
//   'key-spacing',
//   'keyword-spacing',
//   'lines-between-class-members',
//   'no-array-constructor',
//   'no-dupe-class-members',
//   'no-extra-parens',
//   'no-implied-eval',
//   'no-loss-of-precision',
//   'no-redeclare',
//   'no-throw-literal',
//   'no-unused-vars',
//   'no-unused-expressions',
//   'no-useless-constructor',
//   'object-curly-spacing',
//   'quotes',
//   'semi',
//   'space-before-blocks',
//   'space-before-function-paren',
//   'space-infix-ops',
// ]

const transformTsRules = (): object => {
  const tsRules: any = {
    // 命名規則 fro '_'
    '@typescript-eslint/naming-convention': 'off',
    // interface type 尾端 ';'
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      },
    ],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
  };

  Object.keys(javascriptRules).forEach((key: string, i) => {
    if (typescriptEslintKey.includes(key)) {
      tsRules[`@typescript-eslint/${key}`] = Object.values(javascriptRules)[i];
    } else { tsRules[key] = Object.values(javascriptRules)[i]; }
  });
  return tsRules;
};

const typescriptRules = transformTsRules();

export default typescriptRules;
