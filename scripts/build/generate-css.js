#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const postcss = require('postcss');
const less = require('less');
const LessPluginCleanCSS = require('less-plugin-clean-css');

const args = process.argv.slice(2);
const min = args.includes('min');

const ROOT_DIR = `${path.resolve(__dirname, '../../')}/dist/packages-dist`;
const content = `
@import "${path.join(ROOT_DIR, 'theme/styles/index.less')}";\n
@import "${path.join(ROOT_DIR, 'abc/index.less')}";\n
`;

const plugins = [];
if (min) {
  const cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});
  plugins.push(cleanCSSPlugin);
}
less.render
  .call(less, content, { plugins })
  .then(({ css }) => {
    return postcss([]).process(css, { parser: less.parser });
  })
  .then(({ css }) => {
    fs.writeFileSync(path.join(ROOT_DIR, `theme/styles/ng-alain${min ? '.min' : ''}.css`), css);
  })
  .catch(err => console.warn(err));
