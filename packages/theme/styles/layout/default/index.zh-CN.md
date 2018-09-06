---
type: Theme
order: 10
title: 默认布局
---

默认布局所有参数都以 `@alain-default-` 开头。

## 参数

| 名称 | 默认值 | 功能 |
| --- | --- | --- |
| `@prefix` | `.alain-default` | 布局样式前缀 |
| `@ease` | `cubic-bezier(.25, 0, .15, 1)` | 动画过滤函数 |
| `@header-hg` | `64px` | 顶部高度 |
| `@header-bg` | `@primary-color` | 顶部背景色 |
| `@header-padding` | `@layout-gutter * 2` | 顶部左右内边距 |
| `@header-search-enabled` | `true` | 是否开启顶部搜索框 |
| `@header-search-height` | `34px` | 顶部搜索框高度 |
| `@aside-wd` | `200px` | 侧边栏宽度 |
| `@aside-bg` | `#fff` | 侧边栏背景色 |
| `@aside-scrollbar-width` | `0` | 侧边栏滚动条宽度 |
| `@aside-scrollbar-height` | `0` | 侧边栏滚动条高度 |
| `@aside-scrollbar-track-color` | `transparent` | 侧边栏滚动条的轨道颜色 |
| `@aside-scrollbar-thumb-color` | `transparent` | 侧边栏滚动条小方块颜色 |
| `@aside-nav-fs` | `14px` | 侧边栏菜单字号 |
| `@aside-nav-padding-top-bottom` | `@layout-gutter` | 侧边栏菜单项上下内边距 |
| `@aside-nav-item-height` | `38px` | 侧边栏菜单项高度 |
| `@aside-nav-text-color` | `rgba(0, 0, 0, 0.65)` | 侧边栏菜单文本颜色 |
| `@aside-nav-text-hover-color` | `#108ee9` | 侧边栏菜单文本悬停颜色 |
| `@aside-nav-group-text-color` | `rgba(0, 0, 0, 0.43)` | 侧边栏菜单分组文本颜色 |
| `@aside-nav-selected-text-color` | `#108ee9` | 侧边栏菜单激活时文本颜色 |
| `@aside-nav-selected-bg` | `#fcfcfc` | 侧边栏菜单激活时背景颜色 |
| `@aside-collapsed-wd` | `@layout-gutter * 8` | 侧边栏收缩后宽度 |
| `@aside-collapsed-nav-fs` | `24px` | 侧边栏收缩后文本字号 |
| `@content-heading-bg` | `#fafbfc` | 内容区域标题背景色 |
| `@content-heading-border` | `#efe3e5` | 内容区域标题底部边框色 |
| `@content-padding` | `@layout-gutter * 3` | 内容区域内边距 |
| `@content-bg` | `#f5f7fa` | 内容区域背景色 |

## 使用方式

在 `src/styles.less` 引入：

```less
@import '~@delon/theme/styles/layout/default/index';
```
