---
title: range
subtitle: 滑动输入条
type: Widgets
---

滑动型输入器，展示当前值和可选范围。

## 注意事项

- 强制忽略 `exclusiveMinimum`、`exclusiveMaximum`

## API

### schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[minimum]` | 最小值 | `number` | `0`
`[maximum]` | 最大值 | `number` | `100`
`[multipleOf]` | 倍数 | `number` | `1`

### ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[range]` | 当添加该属性时，启动双滑块模式 | `Boolean` | -
`[marks]` | 刻度标记 | `NzMarks` | -
`[dots]` | 是否只能拖拽到刻度上 | `Boolean` | `false`
`[included]` | 是否包含。`marks` 不为空对象时有效，值为 `true` 时表示值为包含关系，`false` 表示并列 | `Boolean` | `true`
`[vertical]` | 竖直显示。添加该属性时，Slider 为垂直方向。 | `boolean` | `false`
`[afterChange]` | 与 `onmouseup` 触发时机一致，把当前值作为参数传入。 | `(value: NzSliderValue) => void` | -
`[formatter]` | Slider 会把当前值传给 `nzTipFormatter`，并在 Tooltip 中显示 `nzTipFormatter` 的返回值，若为 null，则隐藏 Tooltip | `(value: number) => string` | -
