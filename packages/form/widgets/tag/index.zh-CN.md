---
title: tag
subtitle: 标签
type: Non-built-in widgets
---

进行标记和分类的小标签，**注：** 只支持 `checkable` 标签模式。

## 导入模块

非内置模块，需要额外在 [json-schema.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11) 导入 `TagWidgetModule`。

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[enum]` | 数据源 | `SFSchemaEnumType[]` | - |

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[asyncData]` | 异步数据源 | `() => Observable<SFSchemaEnumType[]>` | - |
| `[mode]` | 设定标签工作的模式 | `'closeable'｜'default'｜'checkable'` | `'checkable'` |
| `[onClose]` | 关闭时的回调，在 `nzMode="closable"` 时可用 | `(e:MouseEvent) => void` | - |
| `[checkedChange]` | 设置标签的选中状态的回调 | `(status: boolean) => void` | - |
