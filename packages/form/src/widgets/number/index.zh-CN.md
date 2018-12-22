---
title: number
subtitle: 数字
type: Widgets
---

通过鼠标或键盘，输入范围内的数值

## 注意事项

- 若 `type="integer"` 会**强制**移除 `minimum`、`maximum`、`multipleOf` 参数的小数部分。

## API

### schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[minimum]` | 最小值 | `number` | -
`[exclusiveMinimum]` | 约束是否包括 `minimum` 值，`true` 表示排除 `minimum` 值 | `boolean` | -
`[maximum]` | 最小值 | `number` | -
`[exclusiveMaximum]` | 约束是否包括 `maximum` 值，`true` 表示排除 `maximum` 值 | `boolean` | -
`[multipleOf]` | 倍数 | `number` | `1`

### ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[prefix]` | 前缀，简化 `nzFormatter`、`nzParser` 的使用 | - | -
`[unit]` | 单位，简化 `nzFormatter`、`nzParser` 的使用 | - | -
`[formatter]` | 等同 `nzFormatter` | - | -
`[parser]` | 等同 `nzParser` | - | -
`[precision]` | 等同 `nzPrecision` | - | -
