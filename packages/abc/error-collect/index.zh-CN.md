---
type: Form
title: error-collect
subtitle: 表单异常消息采集器
cols: 2
module: ErrorCollectModule
---

一个简单的表单异常消息采集器，点击图标跳转相应的位置；必须是一个标准 `form` 表单。

## API

### error-collect

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[freq]` | 监听频率，单位：毫秒 | `number` | `500` | ✅ |
| `[offsetTop]` | 顶部偏移值，单位：`px` | `number` | `145` | ✅ |
