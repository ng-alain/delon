#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

let root = path.resolve(__dirname, `../..`);

function copyLess(name) {
  let sourcePath = path.join(root, `packages/${name}`);
  let targetPath = path.join(root, `dist/@delon/${name}`);
  // index.less
  [`index.less`, `theme-default.less`, `theme-dark.less`, `theme-compact.less`, `theme-variable.less`]
    .filter(fileName => fse.existsSync(`${sourcePath}/${fileName}`))
    .forEach(fileName => {
      fse.copySync(`${sourcePath}/${fileName}`, `${targetPath}/${fileName}`);
    });
  // modules less
  fs.readdirSync(sourcePath)
    .filter(name => fs.existsSync(`${sourcePath}/${name}/style/index.less`))
    .forEach(name => {
      fse.copySync(`${sourcePath}/${name}/style`, `${targetPath}/${name}/style`);
    });
}

// copy theme
function copyTheme() {
  [
    'system',
    'mixins.less',
    'index.less',
    'default.less',
    'dark.less',
    'compact.less',
    'variable.less',
    `theme-default.less`,
    `theme-dark.less`,
    `theme-compact.less`,
    `theme-variable.less`,
  ].forEach(fileName => {
    fse.copySync(path.join(root, `packages/theme/${fileName}`), path.join(root, `dist/@delon/theme/${fileName}`));
  });
}

['theme', 'abc', 'chart', 'acl', 'form', 'theme/src/pipes'].forEach(name => copyLess(name));

copyTheme();
