---
title: checkbox
subtitle: 多选框
type: Widgets
---

一组可选项中进行多项选择时

## schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
enum | 数据源，当数据源存在于表示一组多选框 | `SFSchemaEnumType[]` | -
readOnly | 禁用状态  | `boolean` | -
title | 无 `enum` 时表示多选框文本内容  | `string` | -
description | 无 `enum` 时表示多选框后帮助信息  | `string` | -

## ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
asyncData | 异步数据源  | `() => Observable<SFSchemaEnumType[]>` | -
size | 大小，等同 `nzSize` | `string` | -
styleType | radio的样式  | `default, button` | `default`
checkAll | 是否需要全选  | `boolean` | -
checkAllText | 全选按钮文本  | `string` | `全选`

## Demo

```ts
schema = {
    properties: {
        // 单个多选框
        protocol: {
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
