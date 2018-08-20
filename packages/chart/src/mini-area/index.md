---
title: g2-mini-area
subtitle: 迷你区域图
cols: 1
module: AdG2GaugeModule
type: Components
---

面积图又叫区域图。 它是在折线图的基础之上形成的, 它将折线图中折线与自变量坐标轴之间的区域使用颜色或者纹理填充，这样一个填充区域我们叫做面积，颜色的填充可以更好的突出趋势信息。

## API

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| `[color]` | 图表颜色 | `string` | `rgba(24, 144, 255, 0.2)` |
| `[borderColor]` | 图表边颜色 | `string` | `#1890FF` |
| `[height]` | 图表高度 | `number` | - |
| `[line]` | 是否显示描边 | `boolean` | `false` |
| `[animate]` | 是否显示动画 | `boolean` | `true` |
| `[padding]` | 图表内部间距 | `array` | `[8, 8, 8, 8]` |
| `[xAxis]` | [x 轴配置](https://antv.alipay.com/g2/doc/tutorial/start/axis.html) | `object` | - |
| `[yAxis]` | [y 轴配置](https://antv.alipay.com/g2/doc/tutorial/start/axis.html) | `object` | - |
| `[data]` | 数据 | `Array<{ x: number, y: number, [key: string]: any }>` | - |
