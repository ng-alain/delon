const path = require('path');
const fs = require('fs');
const { generateTheme } = require('antd-theme-generator');
const bundle = require('less-bundle-promise');

const root = path.resolve(__dirname, '../../');

const allLess = `
@import './theme/styles/index';
@import './theme/styles/layout/pro/index';
@import './theme/styles/layout/fullscreen/index';
@import './abc/index';
@import './chart/index';
`;

fs.writeFileSync(path.resolve(root, '.tmp/all.less'), allLess);

const traget = path.join(root, '../ng-alain/src/assets/alain-pro.less');

bundle({
  src: path.join(root, '.tmp/all.less'),
}).then(colorsLess => {
  fs.writeFileSync(traget, colorsLess);
});

// const options = {
//   antdStylesDir: path.join(root, 'node_modules/ng-zorro-antd/src/'),
//   stylesDir: path.join(root, '.tmp'),
//   varFile: path.join(root, '.tmp/all.less'),
//   themeVariables: [
//     '@primary-color'
//   ],
//   mainLessFile: path.join(root, '.tmp/all.less'),
//   outputFilePath: path.join(root, '../ng-alain/src/assets/alain-pro.less'),
// };

// generateTheme(options);
