---
title: g2-pie
subtitle: 饼状图
cols: 1
module: G2PieModule
type: Components
---

用于显示跟速度相关图形再适合不过。

## API

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| `[animate]` | 是否显示动画 | `boolean` | `true` |
| `[color]` | 图表颜色 | `string` | `rgba(24, 144, 255, 0.85)` |
| `[height]` | 图表高度 | `number` | - |
| `[hasLegend]` | 是否显示 legend | `boolean` | `false` |
| `[padding]` | 图表内部间距 | `number[]` | `[12, 0, 12, 0]` |
| `[percent]` | 占比 | `number` | - |
| `[lineWidth]` | 边框粗细 | `number` | `0` |
| `[inner]` | 内部极坐标系的半径 | `number` | `0.75` |
| `[tooltip]` | 是否显示 tooltip | `boolean` | `true` |
| `[select]` | 几何标记的选中模式 | `boolean` | `true` |
| `[subTitle]` | 图表子标题 | `string` | - |
| `[total]` | 总量 | `string` | - |
| `[data]` | 数据 | `Array<{ x: number, y: number, [key: string]: any }>` | - |
