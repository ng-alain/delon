#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

let root = path.resolve(__dirname, `../..`);

function copyLess(name) {
  let sourcePath = path.join(root, `packages/${name}`);
  let targetPath = path.join(root, `dist/@delon/${name}`);
  // index.less
  [`index.less`, `theme-default.less`, `theme-dark.less`, `theme-compact.less`].forEach(fileName => {
    fse.copySync(`${sourcePath}/${fileName}`, `${targetPath}/${fileName}`);
  });
  // modules less
  fs.readdirSync(targetPath).forEach(name => {
    if (fs.existsSync(`${sourcePath}/${name}/style/index.less`)) {
      fse.copySync(`${sourcePath}/${name}/style`, `${targetPath}/${name}/style`);
    }
  });
}

// copy theme
function copyTheme() {
  [
    'system',
    'layout',
    'index.less',
    'default.less',
    'dark.less',
    'compact.less',
    `theme-default.less`,
    `theme-dark.less`,
    `theme-compact.less`,
  ].forEach(fileName => {
    fse.copySync(path.join(root, `packages/theme/${fileName}`), path.join(root, `dist/@delon/theme/${fileName}`));
  });
}

['abc', 'chart'].forEach(name => copyLess(name));
copyTheme();
