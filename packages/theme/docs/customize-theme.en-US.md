---
order: 5
title: Customize Theme
type: Documents
---

Ant Design allows you to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc.

![](https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png)

## Less variables

We are using [Less](http://lesscss.org/) as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.

### Customize theme with schematics

Run `ng add ng-alain`, set up custom theme file, then modified the file `src/styles/theme.less`.

## Official Themes

We have some official themes, try them out and give us some feedback!

- 🌑 Dark Theme (supported in 9+)
- 📦 Compact Theme (supported in 9+)

### Method 1

Import `theme-dark.less` or `theme-compact.less` in `src/styles.less` file.

```less
@import '~@delon/theme/system/index';
@import '~@delon/abc/index';
@import '~@delon/chart/index';
@import '~@delon/theme/layout/default/index';
@import '~@delon/theme/layout/fullscreen/index';

@import './styles/index';
@import './styles/theme';

// - `dark` Import the official dark less style file
// - `compact`  Import the official compact less style file
// @import '~@delon/theme/theme-dark.less';
```

### Method 2

If the project does not use Less, you can include `dark.css` or `compact.css` in the CSS file or add to the `angular.json` config.

CSS file：

```css
@import "~@delon/theme/dark.css";
```

angular.json

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

## Switch Theming

When using @angular/cli to configure themes, you must build applications for each theme. When you want to switch themes without reloading the application (like this website), you can use the following method to compile the theme into a style file, and switch at runtime:

Note: Make sure theme variables exist in global styles, not in component scope styles, because component styles that have higher priority will prevent the theme override.

1. Install Dependencies

```bash
# yarn
yarn add less -D less-plugin-clean-css -D less-plugin-npm-import -D
# npm
# npm i less -D less-plugin-clean-css -D less-plugin-npm-import -D
```

2. Script

Take the dark theme, for example, use the less-compiler to compile the application's style entry file, and replace the style variables in the ` modifyVars`,  and output to target path.

> A complete code, please refer to [theme.js](https://github.com/ng-alain/ng-alain/blob/master/scripts/theme.js)。

```js
const less = require('less');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const LessPluginNpmImport = require('less-plugin-npm-import');
const fs = require('fs');
const darkThemeVars = require('@delon/theme/theme-dark');

const appStyles = 'src/styles.less'; // style entry path for the application
const themeContent = `@import '${appStyles}';`;

less.render(themeContent, {
  javascriptEnabled: true,
  plugins: [new LessPluginNpmImport({ prefix: '~' }), new LessPluginCleanCSS({ advanced: true })],
  modifyVars: {
    ...darkThemeVars
  }
}).then(data => {
  fs.writeFileSync(
    // output path for the theme style
    'src/assets/style.dark.css',
    data.css
  )
}).catch(e => {
  // log the render error
  console.error(e);
});
```

3. Switch Theme at Runtime

Dynamically create a `link` tag, dynamically load style files into the application, and remove them otherwise.

> A complete code, please refer to [theme-btn](https://github.com/ng-alain/ng-alain/tree/master/src/app/layout/default/theme-btn)。

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
