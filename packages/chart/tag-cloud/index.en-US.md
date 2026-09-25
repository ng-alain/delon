---
title: g2-tag-cloud
subtitle: Tag Cloud
cols: 1
type: G2
module: import { G2TagCloudModule } from '@delon/chart/tag-cloud';
---

A tag cloud is a way to display a set of related tags and their corresponding weights. A typical tag cloud contains 30 to 150 tags, and the weight affects the font size or other visual effects.

## API

### g2-tag-cloud

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[height]` | Height | `number` | `200` |
| `[width]` | Width, automatically detected from the host element if not specified | `number` | `0` |
| `[padding]` | Padding of the chart | `number \| number[] \| 'auto'` | `0` |
| `[data]` | Data | `G2TagCloudData[]` | `[]` |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
| `(clickItem)` | Callback when clicking an item | `output<G2TagCloudClickItem>` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |

### G2TagCloudData

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[name]` | Name | `string` | - |
| `[value]` | Value | `number` | - |
