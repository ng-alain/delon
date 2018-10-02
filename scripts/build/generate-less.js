const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

let root = path.resolve(__dirname, `../..`);

function copyLess(name) {
  let sourcePath = path.join(root, `packages/${name}`);
  let targetPath = path.join(root, `dist/@delon/${name}`);
  // index.less
  fse.copySync(`${sourcePath}/index.less`, `${targetPath}/index.less`);
  // modules less
  fs.readdirSync(targetPath).forEach(name => {
    if (fs.existsSync(`${sourcePath}/${name}/style/index.less`)) {
      fse.copySync(
        `${sourcePath}/${name}/style`,
        `${targetPath}/${name}/style`,
      );
    }
  });
}

['abc', 'chart'].forEach(name => copyLess(name));

// copy theme
fse.copySync(
  path.join(root, `packages/theme/styles`),
  path.join(root, `dist/@delon/theme/styles`),
);
