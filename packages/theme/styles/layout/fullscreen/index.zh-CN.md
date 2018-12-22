---
type: Theme
order: 110
title: 全屏布局
---

默认布局所有参数都以 `@alain-fullscreen-` 开头。

## 参数

| 名称 | 默认值 | 功能 |
| --- | --- | --- |
| `@prefix` | `.alain-fullscreen` | 布局样式前缀 |
| `@bg` | `#f5f7fa` | 背景色 |
| `@content-padding-vertical` | `0` | 垂直内边距 |
| `@content-padding-horizontal` | `16px` | 水平内边距 |

## 使用方式

在 `src/styles.less` 引入：

```less
@import '~@delon/theme/styles/layout/fullscreen/index';
```
