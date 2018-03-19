const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const sourcePath = path.resolve(__dirname, '../../packages/abc');
const targetPath = path.resolve(__dirname, '../../dist/packages-dist/abc/src');

let componentsLessContent = '';
fs.readdirSync(targetPath).forEach(dir => {
    if (fs.existsSync(`${sourcePath}/${dir}/style/index.less`)) {
      componentsLessContent += `@import "./src/${path.join(dir, 'style', 'index.less')}";\n`
      fse.copySync(`${sourcePath}/${dir}/style`, `${targetPath}/${dir}/style`);
    }
  }
)
// charts
const chartsSourcePath = path.resolve(__dirname, '../../packages/abc/charts');
const chartsTargetPath = path.resolve(__dirname, '../../dist/packages-dist/abc/src/charts');
componentsLessContent += `@import "./src/charts/chart.less";\n`
fse.copySync(`${chartsSourcePath}/chart.less`, `${chartsTargetPath}/chart.less`);

fs.readdirSync(chartsTargetPath).forEach(dir => {
    if (fs.existsSync(`${chartsSourcePath}/${dir}/style/index.less`)) {
      componentsLessContent += `@import "./src/charts/${path.join(dir, 'style', 'index.less')}";\n`
      fse.copySync(`${chartsSourcePath}/${dir}/style`, `${chartsTargetPath}/${dir}/style`);
    }
  }
)

fs.writeFileSync(`${path.resolve(__dirname, '../../dist/packages-dist/abc')}/index.less`, componentsLessContent);
