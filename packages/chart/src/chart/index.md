---
title: g2-chart
subtitle: 自定义图表
cols: 1
module: AdG2ChartModule
type: Components
---

除 `@delon/chart` 封装的组件外，也可以直接使用 `g2-chart` 更有效的封装自己的图表组件。

## API

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| `[title]` | 卡片标题 | `string` \| `TemplateRef<any>` | - |
| `[avatar]` | 头像 | `string` \| `TemplateRef<any>` | - |
| `[action]` | 卡片操作 | `string` \| `TemplateRef<any>` | - |
| `[total]` | 数据总量（支持HTML） | `string` | - |
| `[footer]` | 卡片底部 | `string` \| `TemplateRef<any>` | - |
| `[contentHeight]` | 内容区域高度（单位：`px`） | `string` | - |
| `[bordered]` | 是否显示边框 | `boolean` | `false` |
