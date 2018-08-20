---
title: g2-mini-bar
subtitle: 迷你柱状图
cols: 1
module: AdG2MiniBarModule
type: Components
---

迷你柱状图更适合展示简单的区间数据，简洁的表现方式可以很好的减少大数据量的视觉展现压力。

## API

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| `[color]` | 图表颜色 | `string` | `#1890FF` |
| `[height]` | 图表高度 | `number` | - |
| `[data]` | 数据 | `Array<{ x: number, y: number, [key: string]: any }>` | - |
| `[borderWidth]` | 线条粗细 | `number` | `5` |
| `[padding]` | 图表内部间距 | `array` | `[8, 8, 8, 8]` |
