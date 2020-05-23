#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const root = path.resolve(__dirname, `../..`);
const themeRoot = path.join(root, `dist/@delon/theme`);
const projectRoot = path.join(themeRoot, `../..`);
[`theme-default.less`, `theme-dark.less`, `theme-compact.less`, `system/index.less`].forEach(fileName => {
  const fullFilePath = path.join(themeRoot, fileName);
  const content = fse
    .readFileSync(fullFilePath)
    .toString('utf8')
    .replace(/\~ng\-zorro\-antd/g, path.relative(fullFilePath, projectRoot) + '/node_modules/ng-zorro-antd');
  fse.writeFileSync(fullFilePath, content);
});
