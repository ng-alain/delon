#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

const ngZorroAntdStylePath = path.join(__dirname, '../../node_modules/ng-zorro-antd/style');
const ngZorro = `
${fs.readFileSync(path.join(ngZorroAntdStylePath, 'themes', 'compact.less'), 'utf8')}
`;

const packagesPath = path.join(__dirname, '../../packages');
const ngAlain = `
${fs.readFileSync(path.join(packagesPath, 'theme', 'system', 'theme-compact.less'), 'utf8')}
${fs.readFileSync(path.join(packagesPath, 'theme', 'layout', 'default', 'theme-compact.less'), 'utf8')}
${fs.readFileSync(path.join(packagesPath, 'theme', 'layout', 'fullscreen', 'theme-compact.less'), 'utf8')}
${fs.readFileSync(path.join(packagesPath, 'abc', 'theme-compact.less'), 'utf8')}
${fs.readFileSync(path.join(packagesPath, 'chart', 'theme-compact.less'), 'utf8')}
`;

module.exports = lessToJs(`${ngZorro}${ngAlain}`, {
  stripPrefix: true,
  resolveVariables: false,
});
