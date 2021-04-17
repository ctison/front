// TODO: remove once fixed: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution')

module.exports = {
  parserOptions: { tsconfigRootDir: __dirname },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['simple-import-sort'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/no-unresolved': 'off',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'latest',
    },
  },
}
