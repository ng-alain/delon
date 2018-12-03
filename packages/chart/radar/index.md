---
title: g2-radar
subtitle: 雷达图
cols: 1
module: G2RadarModule
type: Components
---

雷达图是以相同点开始的轴上表示的三个或更多个定量变量的二维图形的形式显示多变量数据的图形方法。轴的相对位置和角度通常是不知情的。

## API

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |
| `[height]` | 图表高度 | `number` | - |
| `[hasLegend]` | 是否显示 legend | `boolean` | `false` |
| `[padding]` | 图表内部间距 | `array` | `[24, 30, 16, 30]` |
| `[colors]` | 颜色列表 | `string[]` | - |
| `[data]` | 数据 | `Array<{ name: string, label: string, value: number, [key: string]: any }>` | - |
