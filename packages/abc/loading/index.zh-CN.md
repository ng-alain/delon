---
type: Basic
order: 2
title: loading
subtitle: 加载指示符
cols: 2
module: LoadingModule
config: LoadingConfig
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