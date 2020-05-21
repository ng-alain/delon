const fs = require('fs');
const path = require('path');
const { generateTheme } = require('antd-theme-generator');

const root = path.join(__dirname, '../..');
const outputFilePath = path.join(root, './src/assets/color.less');
const options = {
  antDir: path.join(root, './node_modules/ng-zorro-antd'),
  antdStylesDir: path.join(root, './node_modules/ng-zorro-antd'),
  stylesDir: path.join(root, './src'),
  varFile: path.join(root, './src/theme.less'),
  themeVariables: ['@primary-color', '@text-color', '@text-color-secondary'],
  // if provided, file will be created with generated less/styles
  outputFilePath,
};

if (fs.existsSync(outputFilePath)) {
  fs.unlinkSync(outputFilePath);
}

generateTheme(options)
  .then(less => {
    console.log('Theme generated successfully');
  })
  .catch(error => {
    console.log('Error', error);
  });
