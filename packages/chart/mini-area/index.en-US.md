---
title: g2-mini-area
subtitle: Mini Area
cols: 2
type: G2
module: import { G2MiniAreaModule } from '@delon/chart/mini-area';
---

An area chart is also called an area graph. It is built on top of a line chart: the area between the line and the axis is filled with a color or texture, and this filled area is called an area. The color fill highlights the trend information better.

## API

### g2-mini-area

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[color]` | Color of the chart | `string` | `rgba(24, 144, 255, 0.2)` |
| `[borderColor]` | Border color of the chart | `string` | `#1890FF` |
| `[borderWidth]` | Border width of the chart | `number` | `2` |
| `[fit]` | Whether to fit the container size (`autoFit`) | `boolean` | `true` |
| `[height]` | Height of the chart | `number` | `56` |
| `[line]` | Whether to display the line | `boolean` | `false` |
| `[animate]` | Whether to display the animation | `boolean` | `true` |
| `[padding]` | Padding of the chart | `array` | `[8, 8, 8, 8]` |
| `[xAxis]` | x-axis options (passed to the v5 `AxisComponent`) | `object` | - |
| `[yAxis]` | y-axis options (passed to the v5 `AxisComponent`) | `object` | - |
| `[yTooltipSuffix]` | Suffix of the y-axis tooltip, usually used to specify the unit | `string` | - |
| `[tooltipType]` | Tooltip type | `'mini','default'` | `'default'` |
| `[data]` | Data | `G2MiniAreaData[]` | - |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
| `(clickItem)` | Callback when clicking an item | `output<G2MiniAreaClickItem>` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |

### G2MiniAreaData

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[x]` | x-axis | `any` | - |
| `[y]` | y-axis | `any` | - |
