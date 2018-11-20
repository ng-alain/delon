---
type: Theme
order: 10
title: Performance
---

ng-alain also includes a set of like bootstrap style tools, And built on the design principles developed by [Ant Design](https://ant.design/). If you are familiar with Bootstrap, it will be very friendly, because all naming as close as it. Also, Install [ng-alain snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode) plugin in VSCode for intellisense these class names.

## Usage

We have hundreds of Less variables (including ng-zorro-antd, ng-alain), some of which contain the `-enabled` suffix, which means that these libraries are optional.

You can to [theme.less](https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less) set to `false`, which can reduce css file size.

```less
// I don't need masonry style
@masonry-enabled: false
```

## Parameters

| Name | Default | Description |
| --- | --- | --- |
| `@scrollbar-enabled` | `true` | Enable landscaping scrollbars |
| `@preserve-white-spaces-enabled` | `true` | Fixed between buttons spacing when enabled [preserveWhitespaces](https://angular.io/api/core/Component#preserveWhitespaces) is true |
| `@form-state-visual-feedback-enabled` | `false` | Turn on visual feedback of form invalid elements |
| `@badge-enabled` | `true` | Whether bootstrap badge |
| `@hafl-enabled` | `true` | Whether hafl image |
| `@abs-enabled` | `true` | Whether abs element|
| `@masonry-enabled` | `true` | Whether css masonry |
| `@setting-drawer-enabled` | `true` | Whether setting drawer css |
| `@search-form-enabled` | `true` | Simple style search form, [DEMO](https://ng-alain.github.io/ng-alain/) |
| `@search__form-enabled` | `true` | Pro style search form, [DEMO](https://ng-alain.github.io/ng-alain/) |





