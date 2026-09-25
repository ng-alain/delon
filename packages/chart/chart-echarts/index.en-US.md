---
title: chart-echarts
subtitle: ECharts
cols: 1
type: ECharts
module: import { ChartEChartsModule } from '@delon/chart/chart-echarts';
---

[ECharts](https://echarts.apache.org/en/index.html) is an open-source JavaScript visualization library. The ECharts script is lazy-loaded and works out of the box.

## API

### chart-echarts

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[width]` | Width of the chart | `number, string` | `100%` |
| `[height]` | Height of the chart | `number, string` | `400px` |
| `[option]` | [Options](https://echarts.apache.org/en/option.html#title) | `ChartEChartsOption` | - |
| `[theme]` | [Theme](https://echarts.apache.org/en/theme-builder.html) configuration | `string, object` | - |
| `[initOpt]` | [init](https://echarts.apache.org/en/api.html#echarts.init) options (such as `renderer`, `devicePixelRatio`); changing it recreates the instance | `object` | - |
| `[on]` | Equivalent to the ECharts [on](https://echarts.apache.org/en/api.html#echartsInstance.on) | `ChartEChartsOn[]` | - |
| `(events)` | Event callback | `output<ChartEChartsEvent>` | - |
