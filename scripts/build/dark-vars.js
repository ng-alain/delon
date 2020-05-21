#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

const ngZorroAntdStylePath = path.join(__dirname, '../../node_modules/ng-zorro-antd/style');
const ngZorro = `
${fs.readFileSync(path.join(ngZorroAntdStylePath, 'color', 'colors.less'), 'utf8')}
${fs.readFileSync(path.join(ngZorroAntdStylePath, 'themes', 'dark.less'), 'utf8')}
`;

const packagesPath = path.join(__dirname, '../../packages');
const ngAlain = `
${fs.readFileSync(path.join(packagesPath, 'theme', 'system', 'theme-dark.less'), 'utf8')}
${fs.readFileSync(path.join(packagesPath, 'theme', 'layout', 'default', 'theme-dark.less'), 'utf8')}
${fs.readFileSync(path.join(packagesPath, 'theme', 'layout', 'fullscreen', 'theme-dark.less'), 'utf8')}
${fs.readFileSync(path.join(packagesPath, 'abc', 'theme-dark.less'), 'utf8')}
${fs.readFileSync(path.join(packagesPath, 'chart', 'theme-dark.less'), 'utf8')}
`;

module.exports = lessToJs(`${ngZorro}${ngAlain}`, {
  stripPrefix: true,
  resolveVariables: false,
});
