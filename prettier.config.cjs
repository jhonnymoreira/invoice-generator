/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'always',
  bracketSameLine: true,
  jsxSingleQuote: true,
  plugins: [
    require('prettier-plugin-astro'),
    require('prettier-plugin-tailwindcss'),
  ],
  pluginSearchDirs: false,
  printWidth: 72,
  singleAttributePerLine: true,
  singleQuote: true,
  trailingComma: 'es5',
};
