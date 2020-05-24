#!/usr/bin/env node

const less = require('less');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const LessPluginNpmImport = require('less-plugin-npm-import');
const fs = require('fs-extra');
const path = require('path');
const root = path.join(__dirname, '../../..');
const vars = require('../../build/vars');
const themePath = path.join(root, './src/styles.less');
const themeContent = `
@import '~ng-zorro-antd/style/color/colorPalette.less';
@import '${themePath}';
`;

function generateTheme(vars, fileName) {
  return less
    .render(themeContent, {
      javascriptEnabled: true,
      plugins: [new LessPluginNpmImport({ prefix: '~' }), new LessPluginCleanCSS({ advanced: true })],
      modifyVars: {
        // hack: `true;@import '~ng-zorro-antd/style/color/colorPalette.less';`,
        ...vars,
        '@site-markdown-code-bg': '@input-bg',
        '@site-text-color': '@heading-color',
      },
    })
    .then(data => {
      fs.writeFileSync(path.join(root, `./src/assets/${fileName}`), data.css);
    })
    .catch(e => {
      console.log(e);
    });
}

function generateAllTheme() {
  return generateTheme(vars.compact, 'compact.css').then(() => generateTheme(vars.dark, 'dark.css'));
}

generateAllTheme();
