const prettierConfig = require('./.prettierrc.js');

module.exports = {
  root: true,
  parserOptions: { ecmaVersion: 2021 },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['tsconfig.json'],
        createDefaultProgram: true
      },
      plugins: ['@typescript-eslint', 'jsdoc', 'import'],
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:prettier/recommended'
      ],
      rules: {
        'prettier/prettier': ['error', prettierConfig],
        'jsdoc/newline-after-description': 1,
        '@angular-eslint/component-selector': [
          'off',
          {
            type: ['element', 'attribute'],
            prefix: ['nz', 'test'],
            style: 'kebab-case'
          }
        ],
        '@angular-eslint/component-class-suffix': [
          'error',
          {
            suffixes: ['Directive', 'Component', 'Base', 'Widget', 'Property']
          }
        ],
        '@angular-eslint/directive-class-suffix': [
          'error',
          {
            suffixes: ['Directive', 'Component', 'Base', 'Widget']
          }
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: ['nz']
          }
        ],
        '@angular-eslint/no-attribute-decorator': 'error',
        '@angular-eslint/no-conflicting-lifecycle': 'off',
        '@angular-eslint/no-forward-ref': 'off',
        '@angular-eslint/no-host-metadata-property': 'off',
        '@angular-eslint/no-lifecycle-call': 'off',
        '@angular-eslint/no-pipe-impure': 'error',
        '@angular-eslint/prefer-output-readonly': 'error',
        '@angular-eslint/use-component-selector': 'off',
        '@angular-eslint/use-component-view-encapsulation': 'off',
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array-simple'
          }
        ],
        '@typescript-eslint/ban-types': [
          'off',
          {
            types: {
              Object: {
                message: 'Use {} instead.'
              },
              String: {
                message: 'Use string instead.'
              },
              Number: {
                message: 'Use number instead.'
              },
              Boolean: {
                message: 'Use boolean instead.'
              },
              Function: {
                message: 'Use specific callable interface instead.'
              }
            }
          }
        ],
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
          'off',
          {
            accessibility: 'explicit'
          }
        ],
        '@typescript-eslint/no-explicit-any': [
          'off',
          {
            ignoreRestArgs: true
          }
        ],
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreParameters: true,
            ignoreProperties: true
          }
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        'prefer-arrow/prefer-arrow-functions': 'off',
        'import/no-duplicates': 'error',
        'import/no-unused-modules': 'error',
        'import/no-unassigned-import': 'error',
        'import/order': [
          'error',
          {
            alphabetize: { order: 'asc', caseInsensitive: false },
            'newlines-between': 'always',
            groups: ['external', 'builtin', 'internal', ['parent', 'sibling', 'index']],
            pathGroups: [
              {
                pattern: '{@angular/**,rxjs,rxjs/operators}',
                group: 'external',
                position: 'before'
              },
              {
                pattern: 'ng-zorro-antd/**',
                group: 'internal',
                position: 'before'
              },
              {
                pattern: '@delon/**',
                group: 'internal',
                position: 'before'
              }
            ],
            "pathGroupsExcludedImportTypes": []
          }
        ],
        'no-bitwise': 'off',
        'no-duplicate-imports': 'error',
        'no-invalid-this': 'off',
        'no-irregular-whitespace': 'error',
        'no-magic-numbers': 'off',
        'no-multiple-empty-lines': 'error',
        'no-redeclare': 'off',
        'no-underscore-dangle': 'off',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'off',
        'prefer-object-spread': 'error',
        'prefer-template': 'error',
        yoda: 'error',
        '@angular-eslint/no-input-rename': 'off',
        '@angular-eslint/no-output-native': 'off',
        '@typescript-eslint/member-ordering': 'off',
        'no-invalid-this': 'off',
        'no-underscore-dangle': 'off',
        'no-shadow': 'off',
        '@angular-eslint/no-input-rename': 'off',
        'prefer-const': 'off',
        'max-len': 'off'
      }
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {}
    },
    {
      files: ['*.html'],
      excludedFiles: ['*inline-template-*.component.html'],
      extends: ['plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': ['error', { parser: 'angular' }]
      }
    }
  ]
};
