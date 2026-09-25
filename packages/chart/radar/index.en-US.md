---
title: g2-radar
subtitle: Radar
cols: 1
type: G2
module: import { G2RadarModule } from '@delon/chart/radar';
---

A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. The relative position and angle of the axes are usually uninformative.

## API

### g2-radar

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[title]` | Title of the chart | `string,TemplateRef<void>` | - |
| `[height]` | Height of the chart | `number` | - |
| `[hasLegend]` | Whether to display the legend | `boolean` | `true` |
| `[padding]` | Padding of the chart | `array` | `[44, 30, 16, 30]` |
| `[tickCount]` | Number of y-axis ticks | `number` | `4` |
| `[colors]` | Color list | `string[]` | `['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911']` |
| `[data]` | Data | `G2RadarData[]` | - |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
| `(clickItem)` | Callback when clicking an item | `output<G2RadarClickItem>` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |

### G2RadarData

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[name]` | Name | `string` | - |
| `[label]` | Label | `string` | - |
| `[value]` | Value | `number` | - |
