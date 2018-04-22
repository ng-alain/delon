---
title: number
subtitle: 数字
type: Widgets
---

通过鼠标或键盘，输入范围内的数值

## 注意事项

- 若 `type="integer"` 会**强制**移除小数部分。

## schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
minimum | 最小值 | `number` | -
exclusiveMinimum | 约束是否包括 `minimum` 值 | `boolean` | -
maximum | 最小值 | `number` | -
exclusiveMaximum | 约束是否包括 `maximum` 值 | `boolean` | -
multipleOf | 倍数 | `number` | `1`

## ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
formatter | 等同 `nzFormatter` | - | -
parser | 等同 `nzParser` | - | -
precision | 等同 `nzPrecision` | - | -

## Demo

```ts
schema = {
    "properties": {
        // 单个多选框
        "protocol": {
            "type": "boolean",
            "title": "同意本协议",
            "description": "《用户协议》",
            "ui": {
                "widget": "checkbox"
            },
            "default": true
        },
        // 多选框组
        "food": {
            "type": "string",
            "title": "Food",
            "enum": [ "Apple", "Pear", "Orange" ],
            "ui": {
                "widget": "checkbox",
                "grid": { "span": 8 } // 指定每一项 8 个单元的布局
            },
            "default": ["Apple"]
        },
        // 异步数据
        "food": {
            "type": "string",
            "title": "Food",
            "ui": {
                "widget": "checkbox",
                "asyncData": () => of([
                    { label: 'Apple', value: 'Apple' },
                    { label: 'Pear', value: 'Pear' },
                    { label: 'Orange', value: 'Orange' }
                ]).pipe(delay(200))
            },
            "default": ["Apple"]
        },
    }
}
```
