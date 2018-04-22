---
title: range
subtitle: 滑动输入条
type: Widgets
---

滑动型输入器，展示当前值和可选范围。

## 注意事项

- `exclusiveMinimum`、`exclusiveMaximum` 无效

## schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
minimum | 最小值 | `number` | -
maximum | 最小值 | `number` | -
multipleOf | 倍数 | `number` | `1`

## ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
range | 当添加该属性时，启动双滑块模式 | `attribute` | -
marks | 刻度标记 | `object` | -
dots | 是否只能拖拽到刻度上 | `Boolean` | `false`
included | 是否包含。`marks` 不为空对象时有效，值为 `true` 时表示值为包含关系，`false` 表示并列 | `Boolean` | `true`
vertical | 竖直显示。添加该属性时，Slider 为垂直方向。 | `attribute` | -
afterChange | 与 `onmouseup` 触发时机一致，把当前值作为参数传入。 | `Function` | -
formatter | 格式化 tip | `Function` | -

## Demo

```ts
schema = {
    properties: {
        count: {
            type: 'number',
            title: '数量',
            ui: {
                widget: 'slider'
            },
            default: 10
        },
        // 双滑块模式
        range: {
            type: 'number',
            title: '范围',
            ui: {
                widget: 'slider',
                range: true
            },
            default: [ 10, 20 ]
        }
    }
}
```
