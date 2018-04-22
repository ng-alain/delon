---
title: rate
subtitle: 评分
type: Widgets
---

对评价进行展示，对事物进行快速的评级操作。

## schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
maximum | 总星数 | `number` | `5`
multipleOf | `0.5` 表示允许半选，其它值表示不允许 | `number` | `0.5`

## ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
allowClear | 是否允许再次点击后清除 | `boolean` | `true`
autoFocus | 自动获取焦点 | `boolean` | `false`
text | 方案，`{{value}}` 表示当前值（注意无任何空格） | `string` | -

## Demo

```ts
schema = {
    properties: {
        rate: {
            type: 'number',
            title: '评级',
            default: 4.5,
            ui: {
                widget: 'rate'
            }
        },
        // 允许半选
        rate: {
            type: 'number',
            title: '评级',
            maximum: 5,
            multipleOf: 0.5,
            default: 4.5,
            ui: {
                widget: 'rate',
                text: '{{value}} starts'
            }
        }
    }
}
```
