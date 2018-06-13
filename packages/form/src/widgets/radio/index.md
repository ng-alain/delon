---
title: radio
subtitle: 单选组
type: Widgets
---

一般用于在多个备选项中选中单个状态。

## API

### schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[enum]` | 数据源 | `SFSchemaEnumType[]` | -
`[readOnly]` | 禁用状态  | `boolean` | -

### ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[asyncData]` | 异步数据源  | `() => Observable<SFSchemaEnumType[]>` | -
`[size]` | 大小，等同 `nzSize` | `string` | -
`[styleType]` | radio的样式  | `default, button` | `default`
