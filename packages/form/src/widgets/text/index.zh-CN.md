---
title: text
subtitle: 文本
type: Widgets
---

一般用于直接显示文本。

## 规则

- 强制取消 `required` 效果
- 若不指定 `defaultText` 值不存在时自动渲染 `-`

## API

### ui 属性

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[defaultText]` | 当值不存在时所指定的文本 | `string` | `-` |
| `[html]` | 是否支持HTML | `boolean` | `true` |
