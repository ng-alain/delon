---
type: Theme
order: 10
title: 包体优化
---

ng-alain 除了提供主题方案以外，还包含一套类似 Bootstrap 的工具集，并且严格遵守 Antd 的设计价值观，对于熟悉 Bootstrap 的人来说会非常友好，因为所有命名方式都尽可能与 Bootstrap 相同。同时，我们为 VSCode 写的 [ng-alain插件](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode) 会自动为你提供这套CSS工具集的智能提醒。

## 如何优化

我们包含着上百种 Less 变量（包含ng-zorro-antd、ng-alain），这些变更有部分是包含着`-enabled` 后缀，它表示这些类库是可选的。

你可以在 ng-alain 项目的 [theme.less](https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less) 中设置为 `false`，可以有效减少 css 文件大小。

```less
// 不需要 masonry 样式
@masonry-enabled: false
```

## 参数

| 名称 | 默认值 | 功能 |
| --- | --- | --- |
| `@scrollbar-enabled` | `true` | 启用美化滚动条 |
| `@preserve-white-spaces-enabled` | `true` | 解决开启 [preserveWhitespaces](https://angular.io/api/core/Component#preserveWhitespaces) 时按钮间可能会出现无缝 |
| `@form-state-visual-feedback-enabled` | `false` | 开启表单元素的视觉反馈 |
| `@badge-enabled` | `true` | bootstrap徽章 |
| `@hafl-enabled` | `true` | 半图 |
| `@abs-enabled` | `true` | 中心元素 |
| `@masonry-enabled` | `true` | CSS瀑布流列 |
| `@setting-drawer-enabled` | `true` | 主题设置 |
| `@search-form-enabled` | `true` | 简化搜索框，[DEMO](https://ng-alain.github.io/ng-alain/) |
| `@search__form-enabled` | `true` | Pro搜索框，[DEMO](https://ng-alain.github.io/ng-alain/) |
