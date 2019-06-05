---
title: radio
subtitle: 单选框
type: Widgets
---

单选框。

## API

### schema 属性

| 参数         | 说明     | 类型                 | 默认值 |
|--------------|--------|----------------------|--------|
| `[enum]`     | 数据源   | `SFSchemaEnumType[]` | -      |
| `[readOnly]` | 禁用状态 | `boolean`            | -      |

### ui 属性

| 参数          | 说明               | 类型                                   | 默认值    |
|---------------|------------------|----------------------------------------|-----------|
| `[asyncData]` | 异步数据源         | `() => Observable<SFSchemaEnumType[]>` | -         |
| `[size]`      | 大小，等同 `nzSize` | `string`                               | -         |
| `[styleType]` | radio 的样式       | `default, button`                      | `default` |
| `[change]`    | 值变更事件         | `(res: SFValue) => void`               | -         |
| `[buttonStyle]` | RadioButton 的风格样式，目前有描边和填色两种风格 | `'outline'｜'solid'` | `'outline'` |
