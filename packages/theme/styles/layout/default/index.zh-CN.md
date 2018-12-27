---
type: Theme
order: 100
title: 默认布局
---

默认布局所有参数都以 `@alain-default-` 开头。

## 参数

| 名称                                           | 默认值                         | 功能                     |
|------------------------------------------------|--------------------------------|------------------------|
| `@alain-default-prefix`                        | `.alain-default`               | 布局样式前缀             |
| `@alain-default-ease`                          | `cubic-bezier(.25, 0, .15, 1)` | 动画过滤函数             |
| `@alain-default-header-hg`                     | `64px`                         | 顶部高度                 |
| `@alain-default-header-bg`                     | `@primary-color`               | 顶部背景色               |
| `@alain-default-header-padding`                | `@layout-gutter * 2`           | 顶部左右内边距           |
| `@alain-default-header-search-enabled`         | `true`                         | 是否开启顶部搜索框       |
| `@alain-default-header-search-height`          | `34px`                         | 顶部搜索框高度           |
| `@alain-default-header-icon-fs`                | `18px`                         | 顶部 Icon 大小           |
| `@alain-default-aside-wd`                      | `200px`                        | 侧边栏宽度               |
| `@alain-default-aside-bg`                      | `#fff`                         | 侧边栏背景色             |
| `@alain-default-aside-scrollbar-width`         | `0`                            | 侧边栏滚动条宽度         |
| `@alain-default-aside-scrollbar-height`        | `0`                            | 侧边栏滚动条高度         |
| `@alain-default-aside-scrollbar-track-color`   | `transparent`                  | 侧边栏滚动条的轨道颜色   |
| `@alain-default-aside-scrollbar-thumb-color`   | `transparent`                  | 侧边栏滚动条小方块颜色   |
| `@alain-default-aside-nav-fs`                  | `14px`                         | 侧边栏菜单字号           |
| `@alain-default-aside-nav-icon-width`          | `14px`                         | 侧边栏菜单 ICON 宽度     |
| `@alain-default-aside-nav-img-wh`              | `14px`                         | 侧边栏菜单图像宽高       |
| `@alain-default-aside-nav-padding-top-bottom`  | `@layout-gutter`               | 侧边栏菜单项上下内边距   |
| `@alain-default-aside-nav-item-height`         | `38px`                         | 侧边栏菜单项高度         |
| `@alain-default-aside-nav-text-color`          | `rgba(0, 0, 0, 0.65)`          | 侧边栏菜单文本颜色       |
| `@alain-default-aside-nav-text-hover-color`    | `#108ee9`                      | 侧边栏菜单文本悬停颜色   |
| `@alain-default-aside-nav-group-text-color`    | `rgba(0, 0, 0, 0.43)`          | 侧边栏菜单分组文本颜色   |
| `@alain-default-aside-nav-selected-text-color` | `#108ee9`                      | 侧边栏菜单激活时文本颜色 |
| `@alain-default-aside-nav-selected-bg`         | `#fcfcfc`                      | 侧边栏菜单激活时背景颜色 |
| `@alain-default-aside-collapsed-wd`            | `@layout-gutter * 8`           | 侧边栏收缩后宽度         |
| `@alain-default-aside-collapsed-nav-fs`        | `24px`                         | 侧边栏收缩后文本字号     |
| `@alain-default-aside-collapsed-nav-img-wh`    | `24px`                         | 侧边栏收缩后图像宽高     |
| `@alain-default-content-heading-bg`            | `#fafbfc`                      | 内容区域标题背景色       |
| `@alain-default-content-heading-border`        | `#efe3e5`                      | 内容区域标题底部边框色   |
| `@alain-default-content-padding`               | `@layout-gutter * 3`           | 内容区域内边距           |
| `@alain-default-content-bg`                    | `#f5f7fa`                      | 内容区域背景色           |
| `@alain-default-widget-app-icons-enabled`      | `true`                         | 是否 app-icon 小部件样式  |
| `@alain-default-aside-user-enabled`            | `true`                         | 是否侧边栏用户信息样式  |

## 使用方式

在 `src/styles.less` 引入：

```less
@import '~@delon/theme/styles/layout/default/index';
```
