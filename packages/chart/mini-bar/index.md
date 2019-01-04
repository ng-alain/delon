---
title: g2-mini-bar
subtitle: 迷你柱状图
cols: 2
module: G2MiniBarModule
type: Components
---

迷你柱状图更适合展示简单的区间数据，简洁的表现方式可以很好的减少大数据量的视觉展现压力。

## API

### g2-mini-bar

| 参数      | 说明                 | 类型         | 默认值 |
|----------|----------------------|-------------|-------|
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[color]` | 图表颜色 | `string` | `#1890FF` |
| `[height]` | 图表高度 | `number` | - |
| `[yTooltipSuffix]` | y 轴Tooltip后缀，一般指定单位 | `string` | - |
| `[tooltipType]` | Tooltip显示类型 | `'mini','default'` | `'default'` |
| `[borderWidth]` | 线条粗细 | `number` | `5` |
| `[padding]` | 图表内部间距 | `array` | `[8, 8, 8, 8]` |
| `[data]` | 数据 | `G2MiniBarData[]` | - |

### G2MiniBarData

| 参数  | 说明 | 类型     | 默认值 |
|-------|-----|----------|--------|
| `[x]` | x轴  | `any` | -      |
| `[y]` | y轴  | `any` | -      |

