const path = require('path');
const { generateTheme } = require('antd-theme-generator');

const root = path.join(__dirname, '../..');

const options = {
  antdStylesDir: path.join(root, './node_modules/ng-zorro-antd'),
  stylesDir: path.join(root, './src'),
  // default path is Ant Design default.less file
  // varFile: path.join(root, './node_modules/@delon/theme/styles/default.less'),
  varFile: path.join(root, './packages/theme/styles/default.less'),
  // site less file
  mainLessFile: path.join(root, './src/styles.less'),
  themeVariables: [
    '@primary-color',
    '@text-color',
    '@text-color-secondary'
  ],
  // if provided, file will be created with generated less/styles
  outputFilePath: path.join(root, './src/assets/color.less')
}

generateTheme(options).then(less => {
  console.log('Theme generated successfully');
})
.catch(error => {
  console.log('Error', error);
})
