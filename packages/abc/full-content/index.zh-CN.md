---
type: Layout
title: full-content
subtitle: 全屏工作区
cols: 1
module: FullContentModule
---

全屏工作区，常用于带有滚动条表格，一个在线[示例](https://ng-alain.github.io/ng-alain/#/delon/simple-table)。

## API

### full-content

参数             | 说明                              | 类型      | 默认值
-----------------|---------------------------------|-----------|-------
`[(fullscreen)]` | 是否完整全屏（不包括顶部、侧边栏等） | `boolean` | -
`[hideTitle]`    | 完整全屏时是否隐藏标题            | `boolean` | `true`
`[padding]`      | 工作区内边距                      | `number`  | `24`

### [full-toggle]

切换是否全屏。

## 全屏控制

包含三种方式：

- 使用 `fullscreen` 双向绑定
- 使用 `[full-toggle]` 指令
- 使用 `FullContentService.toggle()` 服务
