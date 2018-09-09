---
title: custom
subtitle: 自定义
type: Widgets
---

完整更复杂的自定义需求。

## 如何使用？

自定义小部件无须在 Schema 中任何特殊定义，但务必确保 **sf-template** 是一个有效路径值；它等同 Schema 属性名。

## API

模板会传递（`{$implicit: this, schema: schema, ui: ui }`）三个参数，细节请参考DEMO：

参数      | 说明           | 类型
----------|----------------|------------------
`[$implicit]` | 当前上下文     | `ControlWidget`
`[schema]`    | 当前节点Schema | `SFSchema`
`[ui]`        | 当前节点UI     | `SFUISchemaItem`

上下文包括 `formProperty` 属性，它是传递数据的唯一中间层，因此维护 `formProperty.value` 是唯一与自定义组件通信的媒介。

上下文还包含了一些快捷属性和方法，有关更多细节请阅读 Widget 的定义。
