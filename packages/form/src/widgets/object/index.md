---
title: object
subtitle: 对象
type: Widgets
---

创建对象，只对 `schema.type="object"` 时有效。

## schema 属性

参数          | 说明                        | 类型                          | 默认值
--------------|-----------------------------|-------------------------------|--------
properties    | 定义对象的属性              | `{ [key: string]: SFSchema }` | -
required      | 必填项属性                  | `string[]`                    | -
maxProperties | 最大属性个数，必须是非负整数 | `number`                      | -
minProperties | 最小属性个数，必须是非负整数 | `number`                      | -

## ui 属性

参数 | 说明                                            | 类型             | 默认值
-----|-------------------------------------------------|------------------|--------
ui   | 指定UI配置信息，优先级高于 `sf` 组件 `ui` 属性值 | `SFUISchemaItem` | -

## Demo

```ts
schema = {
    properties: {
        name: { type: "string" },
        age: { type: "number" }
    },
    required: [ "name", "age" ],
    ui: {
        // 指定 `label` 和 `control` 在一行中各占栅格数
        spanLabel: 4,
        spanControl: 20
    }
}
```
