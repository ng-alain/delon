const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

let sourcePath = path.resolve(__dirname, `../../packages`);
let targetPath = path.resolve(__dirname, `../../dist/packages-dist`);
let componentsLessContent = '';

// copy index.less
['abc', 'chart'].forEach(name => {
  fse.copySync(
    `${sourcePath}/${name}/index.less`,
    `${targetPath}/${name}/index.less`,
  );
});

// #region abc

sourcePath = path.resolve(__dirname, '../../packages/abc');
targetPath = path.resolve(__dirname, '../../dist/packages-dist/abc/src');

fs.readdirSync(targetPath).forEach(name => {
  if (fs.existsSync(`${sourcePath}/${name}/style/index.less`)) {
    componentsLessContent += `@import "./src/${path.join(
      name,
      'style',
      'index.less',
    )}";\n`;
    fse.copySync(`${sourcePath}/${name}/style`, `${targetPath}/${name}/style`);
  }
});

fs.writeFileSync(
  `${path.resolve(__dirname, '../../dist/packages-dist/abc')}/index.less`,
  componentsLessContent,
);

// #endregion

// #region chart

sourcePath = path.resolve(__dirname, '../../packages/chart/src');
targetPath = path.resolve(__dirname, '../../dist/packages-dist/chart/src/src');

// chart.less
componentsLessContent = '@import "./src/src/chart.less";\n';

fse.copySync(
  `${sourcePath}/chart.less`,
  `${targetPath}/chart.less`,
);

fs.readdirSync(targetPath).forEach(dir => {
  if (fs.existsSync(`${sourcePath}/${dir}/style/index.less`)) {
    componentsLessContent += `@import "./src/src/${path.join(
      dir,
      'style',
      'index.less',
    )}";\n`;
    fse.copySync(
      `${sourcePath}/${dir}/style`,
      `${targetPath}/${dir}/style`,
    );
  }
});

fs.writeFileSync(
  `${path.resolve(__dirname, '../../dist/packages-dist/chart')}/index.less`,
  componentsLessContent,
);

// #endregion
