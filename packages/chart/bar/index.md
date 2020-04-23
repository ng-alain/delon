---
title: g2-bar
subtitle: 柱状图
cols: 1
module: G2BarModule
type: Components
---

使用垂直的柱子显示类别之间的数值比较。其中一个轴表示需要对比的分类维度，另一个轴代表相应的数值。

## API

### g2-bar

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |
| `[color]` | 图表颜色 | `string` | `rgba(24, 144, 255, 0.85)` |
| `[padding]` | 图表内部间距 | `Array<number | string> | string` | `[32, 0, 32, 40]` |
| `[height]` | 图表高度 | `number` | - |
| `[data]` | 数据 | `G2BarData[]` | `[]` |
| `[autoLabel]` | 在宽度不足时，自动隐藏 x 轴的 label | `boolean` | `true` |
| `[interaction]` | 交互类型，none 无 element-active 图形元素，active-region 图表组件，brush 框选，drag-move 移动 | `InteractionType` | `none` |
| `[theme]` | 定制图表主题 | `string | LooseObject` | - |

### G2BarData

| 参数  | 说明 | 类型     | 默认值 |
|-------|-----|----------|--------|
| `[x]` | x轴  | `any` | -      |
| `[y]` | y轴  | `any` | -      |