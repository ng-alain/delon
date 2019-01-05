---
type: Basic
order: 2
title: _src
subtitle: 显示图像
cols: 1
module: ImageModule
config: ImageConfig
---

等同于 `src`，但相比较更多功能：

+ 支持微信、qq头像规则缩略图规则
+ 支持移除http&https协议http
+ 支持增加onerror事件

## API

### [_src]

参数      | 说明             | 类型     | 默认值
----------|----------------|----------|------------------------
`[size]`  | 图像大小         | `number` | `64`
`[error]` | 替代图像无法加载 | `string` | `./assets/img/logo.svg`