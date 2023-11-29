---
title: segmented
subtitle: 分段控制器
type: Non-built-in widgets
---

- 用于展示多个选项并允许用户选择其中单个选项；
- 当切换选中选项时，关联区域的内容会发生变化。

## 导入模块

非内置模块，需要额外在 [json-schema.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11) 导入 `SegmentedWidgetModule`。

## API

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[block]` | 将宽度调整为父元素宽度的选项 | `boolean` | false |  |
| `[asyncData]` | 异步数据 | `() => Observable<NzSegmentedOptions>` | - |  |
| `(valueChange)` | 当前选中项目变化时触发回调 | `(data: { index: number; item: SFValue }) => void` | - |  |
