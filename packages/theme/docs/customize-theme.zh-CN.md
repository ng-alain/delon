---
order: 5
title: 定制主题
type: Documents
---

Ant Design 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。

![](https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png)

## 定制方式
Ant Design 的样式使用了 [Less](http://lesscss.org/) 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整，默认样式变量：[NG-ZORRO](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/style/themes/default.less)、[NG-ALAIN]() 两部分。

### 初始化项目时定制主题

在初始化项目时 `ng add ng-alain` 时选择自定义主题即可自动配置好自定义主题的相关文件，修改 `src/styles/theme.less` 文件内容就可以自定义主题。

## 官方主题

我们提供了一些官方主题，欢迎在项目中试用，并且给我们提供反馈。

- 🌑 暗黑主题（9+ 支持）
- 📦 紧凑主题（9+ 支持）

### 方式一

是在样式文件全量引入 `dark.less` 或 `compact.less` 覆盖主题变量。

```less
@import "~@delon/theme/dark.less";    // 引入官方提供的暗色 less 样式文件
@import "~@delon/theme/compact.less"; // 引入官方提供的紧凑 less 样式文件
```

### 方式二

如果项目不使用 Less，可在 CSS 文件或者 `angular.json` 的 `styles` 字段中，全量引入 `dark.css` 或者 `compact.css`。

样式文件中：

```css
@import "~@delon/theme/dark.css";
```

angular.json 中

```json
{
  "build": {
    "options": {
      "styles": [
        "node_modules/@delon/theme/dark.css"
      ]
    }
  }
}
```

## 主题切换

当使用 @angular/cli 的方式配置主题时必须为每个主题单独打包应用，当你想切换主题而不重新加载应用时（就像这个网站），你可以使用下面的方法将主题编译到单独的样式文件，并在运行时切换：

注意：确保与主题变量相关的样式存在全局样式中，而不是组件样式中，因为组件样式优先级更高将会导致样式无法被覆盖。

1. 安装依赖

```bash
# yarn
yarn add less -D less-plugin-clean-css -D less-plugin-npm-import -D
# npm
npm i less -D less-plugin-clean-css -D less-plugin-npm-import -D
```

2. 编写脚本

以黑暗主题为例，使用 `less` 编译应用的样式入口文件，并且在 `modifyVars` 参数中替换样式变量，并输出到目标位置。

```js
const less = require('less');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const LessPluginNpmImport = require('less-plugin-npm-import');
const fs = require('fs');
const darkThemeVars = require('@delon/theme/theme-dark');

const appStyles = 'src/styles.less'; // 应用的样式入口文件
const themeContent = `
@import '~ng-zorro-antd/style/color/colorPalette.less';
@import '${appStyles}';
`;

less.render(themeContent, {
  javascriptEnabled: true,
  plugins: [new LessPluginNpmImport({ prefix: '~' }), new LessPluginCleanCSS({ advanced: true })],
  modifyVars: {
    ...darkThemeVars
  }
}).then(data => {
  fs.writeFileSync(
    // 主题样式的输出文件
    'src/assets/style.dark.css',
    data.css
  )
}).catch(e => {
  // 记录渲染错误
  console.error(e);
});
```

3. 运行时切换样式

动态创建 `link` 标签，将样式文件动态加载在应用中，反之移除。

```ts
changeTheme(theme: 'default' | 'dark'): void {
  if (theme === 'dark') {
    const style = document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.id = 'dark-theme';
    style.href = 'assets/style.dark.css';
  } else {
    const dom = document.getElementById('dark-theme');
    if (dom) {
      dom.remove();
    }
  }
}
```

