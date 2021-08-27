---
title: custom
subtitle: 自定义
type: Widgets
---

定制当前动态表单小部件。更复杂请参考[定制小部件](/form/customize)。

## 如何使用

务必指定 **sf-template** 是有效路径值，例如：

```html
<sf>
  <ng-template sf-template="formFieldName" let-i let-ui="ui" let-schema="schema">
  </ng-tempalte>
</sf>
```

## API

| 参数          | 说明            | 类型             |
| ------------- | --------------- | ---------------- |
| `[$implicit]` | 当前上下文      | `ControlWidget`  |
| `[schema]`    | 当前节点 Schema | `SFSchema`       |
| `[ui]`        | 当前节点 UI     | `SFUISchemaItem` |

上下文包括 `formProperty` 属性，它是传递数据的唯一中间层，因此维护 `formProperty.value` 是唯一与自定义组件通信的媒介。

上下文还包含了一些快捷属性和方法，有关更多细节请阅读 [Widget](https://github.com/ng-alain/delon/blob/master/packages/form/src/widget.ts) 的定义。
