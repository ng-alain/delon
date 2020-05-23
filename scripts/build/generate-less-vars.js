#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, `../..`);
const themeRoot = path.join(root, `dist/@delon/theme`);

const vars = require('./vars');

fs.writeFileSync(path.join(themeRoot, 'theme-dark.js'), `module.exports = ${JSON.stringify(vars.dark)}`, 'utf8');
fs.writeFileSync(path.join(themeRoot, 'theme-compact.js'), `module.exports = ${JSON.stringify(vars.compact)}`, 'utf8');
fs.writeFileSync(path.join(themeRoot, 'theme-default.js'), `module.exports = ${JSON.stringify(vars.default)}`, 'utf8');
