---
title: g2-gauge
subtitle: 仪表盘
cols: 1
module: G2GaugeModule
type: Components
---

一种进度展示方式，可以更直观的展示当前的进展情况，通常也可表示占比。

## API

### g2-gauge

| 参数      | 说明           | 类型         | 默认值 |
|----------|----------------|-------------|-------|
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[title]` | 图表标题 | `string` | - |
| `[height]` | 图表高度 | `number` | - |
| `[color]` | 图表颜色 | `string` | `#2F9CFF` |
| `[bgColor]` | 图表背景色 | `string` | `#F0F2F5` |
| `[percent]` | 进度比例 | `number` | - |
| `[padding]` | 内边距 | `Array<number | string>` | `[10, 10, 30, 10]` |
| `[format]` | 坐标轴格式 | `(text: string, item: {}, index: number) => string` | - |
