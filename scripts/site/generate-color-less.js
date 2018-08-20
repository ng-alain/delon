#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const { generateTheme } = require('antd-theme-generator');

const root = path.resolve(__dirname, '../../');

const allLess = `
@import './theme/styles/default';
@import './theme/styles/app/index';
@import './abc/index';
@import '../src/app/styles/index.less';
`;
fs.writeFileSync(path.resolve(root, '.tmp/all.less'), allLess);

const options = {
  antdStylesDir: path.join(root, 'node_modules/ng-zorro-antd/src/'),
  stylesDir: path.join(root, '.tmp'),
  // varFile: path.join(__dirname, '../components/style/themes/default.less'),
  themeVariables: ['@primary-color'],
  mainLessFile: path.join(root, '.tmp/all.less'),
  outputFilePath: path.join(root, 'src/assets/color.less'),
};

generateTheme(options);
