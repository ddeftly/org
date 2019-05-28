module.exports = {
    parser: 'babel-eslint',
    env: {
      browser: true,
      es6: true,
      node: true
    },
    'extends': 'airbnb',
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: [
      'react',
      'import'
    ],
    rules: {
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never'
        }
      ],
      'no-alert': 'off',
      'max-len': [
        'error',
        250
      ],
      'func-names': [
        'error',
        'as-needed'
      ],
      'function-paren-newline': [
        'error',
        {
          minItems: 5
        }
      ],
      'func-style': [
        'warn',
        'declaration',
        {
          allowArrowFunctions: true
        }
      ],
      indent: [
        'error',
        4
      ],
      'no-nested-ternary': [
        'warn'
      ],
      'no-param-reassign': [
        'error',
        {
          props: false
        }
      ],
      'no-restricted-properties': [
        'warn'
      ],
      'no-underscore-dangle': [
        'off'
      ],
      'no-undef': [
        'warn'
      ],
      'object-shorthand': [
        'off',
        'methods'
      ],
      'quote-props': [
        'error',
        'as-needed',
        {
          keywords: false,
          unnecessary: true,
          numbers: true
        }
      ],
      'import/exports-last': [
        'error'
      ],
      'import/newline-after-import': [
        'error',
        {
          count: 2
        }
      ],
      'import/no-named-as-default': [
        'warn'
      ],
      'import/order': [
        'error',
        {
          'newlines-between': 'never'
        }
      ],
      'import/prefer-default-export': [
        'off'
      ],
      'react/no-multi-comp': 'off',
      'jsx-quotes': [
        'error',
        'prefer-single'
      ],
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: [
            '.js'
          ]
        }
      ],
      'react/jsx-indent': [
        'error',
        4
      ],
      'react/no-unescaped-entities': 'off',
      'react/jsx-indent-props': [
        'error',
        4
      ],
      'react/jsx-one-expression-per-line': 'off',
      'react/prop-types': [
        'error',
        {
          skipUndeclared: true
        }
      ],
      'react/require-optimization': [
        'error'
      ],
      'react/destructuring-assignment': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off'
    }
  };