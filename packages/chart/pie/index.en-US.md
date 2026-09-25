---
title: g2-pie
subtitle: Pie
cols: 1
type: G2
module: import { G2PieModule } from '@delon/chart/pie';
---

It is ideal for displaying speed-related graphics.

## API

### g2-pie

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[animate]` | Whether to display the animation | `boolean` | `true` |
| `[color]` | Color of the chart | `string` | `rgba(24, 144, 255, 0.85)` |
| `[height]` | Height of the chart | `number` | - |
| `[fontSize]` | Base font size (the legend inherits it and the center value scales with `em`) | `number` | `14` |
| `[hasLegend]` | Whether to display the legend | `boolean` | `false` |
| `[padding]` | Padding of the chart | `number[]` | `[12, 0, 12, 0]` |
| `[percent]` | Percentage | `number` | - |
| `[select]` | Whether slice selection is supported (**not implemented in the current version, kept for compatibility and has no effect**) | `boolean` | `true` |
| `[lineWidth]` | Border width | `number` | `0` |
| `[inner]` | Radius of the inner polar coordinate | `number` | `0.75` |
| `[blockMaxWidth]` | Width at which the layout switches to block mode | `number` | `380` |
| `[tooltip]` | Whether to display the tooltip | `boolean` | `true` |
| `[subTitle]` | Subtitle of the chart | `string,TemplateRef<void>` | - |
| `[total]` | Total amount | `string,number,TemplateRef<void>` | - |
| `[valueFormat]` | Formatter for the y-axis value | `(y: number) => string` | - |
| `[data]` | Data | `G2PieData[]` | - |
| `[colors]` | Color list | `string[]` | - |
| `[interaction]` | Interaction type: `none` (no interaction), `element-active` (active element), `active-region` (chart component), `brush` (brush selection), `drag-move` (drag to move) | `InteractionType` | `none` |
| `[ratio]` | Percentage configuration | `G2PieRatio` | `{ text: '占比', inverse: '反比', color: '', inverseColor: '#F0F2F5' }` |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
| `(clickItem)` | Callback when clicking an item | `output<G2PieClickItem>` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |

### G2PieData

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[x]` | x-axis | `any` | - |
| `[y]` | y-axis | `number` | - |
