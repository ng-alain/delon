---
title: object
subtitle: 对象
type: Widgets
order: 1
---

创建对象，只对 `schema.type="object"` 时有效。

## API

### schema 属性

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[properties]` | 定义对象的属性 | `{ [key: string]: SFSchema }` | - |
| `[required]` | 必填项属性 | `string[]` | - |
| `[maxProperties]` | 最大属性个数，必须是非负整数 | `number` | - |
| `[minProperties]` | 最小属性个数，必须是非负整数 | `number` | - |

### ui 属性

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[showExpand]` | 是否显示扩展，点击隐藏内容，限 `type === 'card'` | `boolean` | `true` |
| `[expand]` | 展开状态，限 `type === 'card'` | `boolean` | `true` |
| `[showTitle]` | 是否显示标题 | `boolean` | `false` |
| `[type]` | 渲染类型 | `card, default` | `default` |
| `[cardSize]` | 等同 `nzSize` 属性 | `small, default` | `small` |
| `[cardBodyStyle]` | 等同 `nzBodyStyle` 属性 | `{ [key: string]: string }` | - |
| `[cardBorderless]` | 等同 `nzBorderless` 属性 | `boolean` | `false` |
| `[cardExtra]` | 等同 `nzExtra` 属性 | `string, TemplateRef<void>` | - |
| `[cardActions]` | 等同 `nzActions` 属性 | `Array<TemplateRef<void>>` | - |
