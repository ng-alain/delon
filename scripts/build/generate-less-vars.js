#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, `../..`);
const themeRoot = path.join(root, `dist/@delon/theme`);

const darkPaletteLess = require('./dark-vars');
const compactPaletteLess = require('./compact-vars');

fs.writeFileSync(path.join(themeRoot, 'theme-dark.js'), `module.exports = ${JSON.stringify(darkPaletteLess)}`, 'utf8');
fs.writeFileSync(path.join(themeRoot, 'theme-compact.js'), `module.exports = ${JSON.stringify(compactPaletteLess)}`, 'utf8');
