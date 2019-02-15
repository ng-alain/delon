---
title: object
subtitle: 对象
type: Widgets
---

创建对象，只对 `schema.type="object"` 时有效。

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
