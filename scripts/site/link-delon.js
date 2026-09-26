#!/usr/bin/env node

/**
 * 将 `node_modules/@delon` 指向工作区源码 `packages/`
 *
 * 为什么不是 `dist/@delon`：站点本身就是从源码编译的（`src/tsconfig.json` 里
 * `@delon/*` 映射到 `../packages/*`），而 `dist/@delon` 只有执行完整打包
 * （`scripts/ci/build.sh`）后才存在。Less 里的包式导入
 * （`@delon/theme/...`、`@delon/abc/...`、`@delon/form/src/style/index.less`）
 * 同样必须解析到源码，否则在没有 `dist` 的场景（`deploy-site.yml` 的 release 流程、
 * 本地未打包就 `npm run site:gen`）会报：
 * `'@delon/abc/theme-variable.less' wasn't found`
 *
 * 注意：不能用 `ln -sf`，当 `node_modules/@delon` 已存在时，它会在其中创建嵌套链接。
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../..');
const linkPath = path.join(root, 'node_modules/@delon');
const target = path.join(root, 'packages');

const stat = fs.lstatSync(linkPath, { throwIfNoEntry: false });
if (stat) {
  if (stat.isSymbolicLink()) {
    fs.unlinkSync(linkPath);
  } else {
    fs.rmSync(linkPath, { recursive: true, force: true });
  }
}
fs.mkdirSync(path.dirname(linkPath), { recursive: true });
fs.symlinkSync(path.relative(path.dirname(linkPath), target), linkPath, 'junction');

console.log(`完成链接 ${path.relative(root, linkPath)} -> ${path.relative(root, target)}`);
