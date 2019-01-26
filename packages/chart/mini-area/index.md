---
title: g2-mini-area
subtitle: 迷你区域图
cols: 2
module: G2GaugeModule
type: Components
---

面积图又叫区域图。 它是在折线图的基础之上形成的, 它将折线图中折线与自变量坐标轴之间的区域使用颜色或者纹理填充，这样一个填充区域我们叫做面积，颜色的填充可以更好的突出趋势信息。

## API

### g2-mini-area

| 参数      | 说明                   | 类型         | 默认值 |
|----------|------------------------|-------------|-------|
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[color]` | 图表颜色 | `string` | `rgba(24, 144, 255, 0.2)` |
| `[borderColor]` | 图表边颜色 | `string` | `#1890FF` |
| `[height]` | 图表高度 | `number` | `56` |
| `[line]` | 是否显示描边 | `boolean` | `false` |
| `[animate]` | 是否显示动画 | `boolean` | `true` |
| `[padding]` | 图表内部间距 | `array` | `[8, 8, 8, 8]` |
| `[xAxis]` | [x 轴配置](https://www.yuque.com/antv/g2-docs/api-chart#frgaiw) | `object` | - |
| `[yAxis]` | [y 轴配置](https://www.yuque.com/antv/g2-docs/api-chart#frgaiw) | `object` | - |
| `[yTooltipSuffix]` | y 轴Tooltip后缀，一般指定单位 | `string` | - |
| `[tooltipType]` | Tooltip显示类型 | `'mini','default'` | `'default'` |
| `[data]` | 数据 | `G2MiniAreaData[]` | - |

### G2MiniAreaData

| 参数  | 说明 | 类型     | 默认值 |
|-------|-----|----------|--------|
| `[x]` | x轴  | `any` | -      |
| `[y]` | y轴  | `any` | -      |
