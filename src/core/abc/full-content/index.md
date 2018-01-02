---
title: full-content
subtitle: 全屏工作区
order: 50
cols: 1
module: AdFullContentModule
---

全屏工作区，常用于带有滚动条表格；[完整示例]()。

## 何时使用

在工作区中经常会遇到超复杂的表格时，往往表格会自带有滚动条。

## API

参数 | 说明 | 类型 | 默认值
----|------|-----|------
fullscreen | 是否完整全屏（不包括顶部、侧边栏等），支持双向绑定 | `boolean` | -
hideTitle | 完整全屏旱是否隐藏标题 | `boolean` | `true`
padding | 工作区内边距 | `number` | `24`

### 关于是否完整全屏

有三种方式可以控制是否完整全屏，包括：

- 使用 `fullscreen` 双向绑定
- 使用 `[full-toggle]` 指令
- 使用 `FullContentService` 服务
