#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const less = require('less');
const LessPluginCleanCSS = require('less-plugin-clean-css');

const ROOT_DIR = `${path.resolve(__dirname, '../../')}/dist/@delon`;

async function genCss(name, min) {
  const content = `
  @import "${path.join(ROOT_DIR, `theme/${name}.less`)}";\n
  `;

  const plugins = [];
  if (min) {
    const cleanCSSPlugin = new LessPluginCleanCSS({ advanced: true });
    plugins.push(cleanCSSPlugin);
  }

  less.render
    .call(less, content, {
      plugins,
      paths: [path.join(__dirname, '../../node_modules/')]
    })
    .then(({ css }) => {
      const savePath = path.join(ROOT_DIR, `theme/${name}${min ? '.min' : ''}.css`);
      fs.writeFileSync(savePath, css);
      console.log(`完成生成 ${name} ${min ? 'min' : ''}版本, ${savePath}`);
    })
    .catch(err => console.warn(`${name} ${min ? 'min' : ''} 异常`, err));
}

function runCss(min) {
  ['default', 'dark', 'compact', 'variable'].forEach(async name => {
    console.log(`开始生成 ${name} ${min ? 'min' : ''}版本`);
    await genCss(name, min);
  });
}

runCss();
runCss(true);
