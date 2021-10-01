---
title: chart-echarts
subtitle: ECharts
cols: 1
type: ECharts
module: import { ChartEChartsModule } from '@delon/chart/chart-echarts';
---

[ECharts](https://echarts.apache.org/zh/index.html) 一个基于 JavaScript 的开源可视化图表库。使用懒加载 ECharts 脚本，开箱启用。

## API

### chart-echarts

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[width]` | 图表宽度 | `number, string` | `100%`|
| `[height]` | 图表高度 | `number, string` | `400px`|
| `[option]` | [配置项](https://echarts.apache.org/zh/option.html#title) | `ChartEChartsOption` | - |
| `[theme]` | [主题](https://echarts.apache.org/zh/theme-builder.html)配置 | `string, object` | - |
| `[on]` | 等同于 ECharts [on](https://echarts.apache.org/zh/api.html#echartsInstance.on) | `ChartEChartsOn[]` | - |
| `(events)` | 事件回调 | `EventEmitter<ChartEChartsEvent>` | - |
