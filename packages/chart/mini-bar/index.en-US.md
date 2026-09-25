---
title: g2-mini-bar
subtitle: Mini Bar
cols: 2
type: G2
module: import { G2MiniBarModule } from '@delon/chart/mini-bar';
---

A mini bar chart is better for displaying simple interval data; its concise presentation greatly reduces the visual pressure of large amounts of data.

## API

### g2-mini-bar

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[color]` | Color of the chart | `string` | `#1890FF` |
| `[height]` | Height of the chart | `number` | - |
| `[yTooltipSuffix]` | Suffix of the y-axis tooltip, usually used to specify the unit | `string` | - |
| `[tooltipType]` | Tooltip type | `'mini','default'` | `'default'` |
| `[borderWidth]` | Line width | `number` | `5` |
| `[padding]` | Padding of the chart | `array` | `[8, 8, 8, 8]` |
| `[data]` | Data | `G2MiniBarData[]` | - |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
| `(clickItem)` | Callback when clicking an item | `output<G2MiniBarClickItem>` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |

### G2MiniBarData

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[x]` | x-axis | `any` | - |
| `[y]` | y-axis | `any` | - |
| `[color]` | Color of the axis | `string` | - |
