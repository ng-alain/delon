#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

function gen(type) {
  const ngZorroAntdStylePath = path.join(__dirname, '../../node_modules/ng-zorro-antd/style');
  const ngZorro = `
  ${fs.readFileSync(path.join(ngZorroAntdStylePath, 'color', 'colors.less'), 'utf8')}
  ${fs.readFileSync(path.join(ngZorroAntdStylePath, 'themes', `${type}.less`), 'utf8')}
  `;

  const packagesPath = path.join(__dirname, '../../packages');
  const ngAlain = `
  ${fs.readFileSync(path.join(packagesPath, 'theme', 'system', `theme-${type}.less`), 'utf8')}
  ${fs.readFileSync(path.join(packagesPath, 'theme', 'layout', 'default', `theme-${type}.less`), 'utf8')}
  ${fs.readFileSync(path.join(packagesPath, 'theme', 'layout', 'fullscreen', `theme-${type}.less`), 'utf8')}
  ${fs.readFileSync(path.join(packagesPath, 'abc', `theme-${type}.less`), 'utf8')}
  ${fs.readFileSync(path.join(packagesPath, 'chart', `theme-${type}.less`), 'utf8')}
  `;

  return lessToJs(`${ngZorro}${ngAlain}`, {
    stripPrefix: true,
    resolveVariables: false,
  });
}

module.exports = {
  default: gen('default'),
  dark: gen('dark'),
  compact: gen('compact'),
};
