module.exports = {
  extends: [
    'eslint-config-react-app',
    'standard',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
    'eslint:recommended',
  ],
  "env": {
    "browser": true
  },
  plugins: [
    'flowtype',
    'react',
    'prettier',
    'standard'
  ],
  rules: {
    'jsx-a11y/href-no-hash': 'off',
    'react/no-string-refs':'off',
    'no-console': 'warn',
    'no-path-concat': 'error',
    'semi': ['error', 'never'],
    'no-var': 'error',
    'quotes': ['error', 'single'],
    'arrow-parens': ['error', 'as-needed'],
    'object-shorthand': ['error', 'always']
  }
}
