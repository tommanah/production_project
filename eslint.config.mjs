import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact, { rules } from "eslint-plugin-react";
import i18nextPlugin from 'eslint-plugin-i18next';


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      i18next: i18nextPlugin
    },
    rules: {
      'react/jsx-indent': [2, 4],
      'react/jsx-indent-props': [2, 4],
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      "@typescript-eslint/ban-ts-comment": "off",
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'react/function-component-definition': 'off',
      'no-shadow': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-underscore-dangle': 'off',
      'i18next/no-literal-string': ['error', {markupOnly: true, "ignoreAttribute": ["data-testid"]}],
      "react/prop-types": "off",
    },
    globals: {
      __IS_DEV__: true,
    },
    overrides: [
      {
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
          'i18next/no-literal-string': 'off',
        }
      }
    ]
  }
];