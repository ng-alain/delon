---
title: tag
subtitle: 热门标签
type: Widgets
---

进行标记标签，**注：** 只支持 `checkable` 标签模式。

## API

### schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
enum | 数据源 | `SFSchemaEnumType[]` | -

### ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
asyncData | 异步数据源 | `() => Observable<SFSchemaEnumType[]>` | -
