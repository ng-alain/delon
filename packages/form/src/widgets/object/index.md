---
title: object
subtitle: 对象
type: Widgets
---

创建对象，只对 `schema.type="object"` 时有效。

## 标题

大部分情况下 Object 对象表示一个完整表单，而表单一般会在某个已知容器里面，所以不显示第一层的标题。但依然可以通过 `showTitle` 来强制显示他们。

## API

### schema 属性

参数          | 说明                        | 类型                          | 默认值
--------------|-----------------------------|-------------------------------|--------
`[properties]`    | 定义对象的属性              | `{ [key: string]: SFSchema }` | -
`[required]`      | 必填项属性                  | `string[]`                    | -
`[maxProperties]` | 最大属性个数，必须是非负整数 | `number`                      | -
`[minProperties]` | 最小属性个数，必须是非负整数 | `number`                      | -

### ui 属性

参数 | 说明                                            | 类型             | 默认值
-----|-------------------------------------------------|------------------|--------
`[showTitle]`   | 是否显示标题 | `boolean` | `false`
`[ui]`   | 指定UI配置信息，优先级高于 `sf` 组件 `ui` 属性值 | `SFUISchemaItem` | -
