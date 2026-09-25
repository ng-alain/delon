---
title: g2-water-wave
subtitle: Water Wave
cols: 1
type: G2
module: import { G2WaterWaveModule } from '@delon/chart/water-wave';
---

A water wave chart is a way to display a proportion, which shows the percentage of a key value more intuitively. It is rendered with the G2 v5 [`liquid`](https://g2.antv.antgroup.com/examples/general/Liquid) mark.

> Sizing is handled by the v5 `autoFit`; when the container is narrower than `[size]`, pass a smaller `[size]` instead. Use the public `render()` method to repaint manually.

## API

### g2-water-wave

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[animate]` | Whether to display the enter animation (the wave motion itself is built into G2 and always runs) | `boolean` | `true` |
| `[title]` | Title of the chart | `string,TemplateRef<void>` | - |
| `[size]` | Size of the chart (the side length of the square) | `number` | `160` |
| `[color]` | Color of the chart (the wave and the ring share it) | `string` | `#1890FF` |
| `[percent]` | Percentage, from `0` to `100` | `number` | - |
| `[padding]` | Padding of the chart | `number \| number[] \| 'auto'` | `8` |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |
