#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const less = require('less');
const LessPluginCleanCSS = require('less-plugin-clean-css');

const args = process.argv.slice(2);
const min = args.includes('min');

const ROOT_DIR = `${path.resolve(__dirname, '../../')}/dist/@delon`;
const content = `
@import "${path.join(ROOT_DIR, 'theme/styles/index.less')}";\n
@import "${path.join(ROOT_DIR, 'theme/styles/layout/default/index.less')}";\n
@import "${path.join(ROOT_DIR, 'theme/styles/layout/fullscreen/index.less')}";\n
@import "${path.join(ROOT_DIR, 'abc/index.less')}";\n
@import "${path.join(ROOT_DIR, 'chart/index.less')}";\n
`;

const plugins = [];
if (min) {
  const cleanCSSPlugin = new LessPluginCleanCSS({ advanced: true });
  plugins.push(cleanCSSPlugin);
}
less.render
  .call(less, content, {
    plugins,
    paths: ['/node_modules/ng-zorro-antd/src/'],
    javascriptEnabled: true,
  })
  .then(({ css }) => {
    fs.writeFileSync(
      path.join(ROOT_DIR, `theme/styles/ng-alain${min ? '.min' : ''}.css`),
      css,
    );
  })
  .catch(err => console.warn(err));
