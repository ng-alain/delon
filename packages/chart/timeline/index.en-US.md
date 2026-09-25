---
title: g2-timeline
subtitle: Timeline
cols: 1
type: G2
module: import { G2TimelineModule } from '@delon/chart/timeline';
---

The `timeline` component renders a bar chart with a time axis, where `x` points to the time value. By default it displays up to two indicators at the same time, `y1` and `y2`.

## API

### g2-timeline

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[title]` | Title of the chart | `string,TemplateRef<void>` | - |
| `[maxAxis]` | Maximum number of indicators | `number` | `2` |
| `[data]` | Data; note that the indicator data passed depends on `maxAxis` | `G2TimelineData[]` | - |
| `[titleMap]` | Alias of the indicator | `G2TimelineMap` | - |
| `[colorMap]` | Color of the indicator | `G2TimelineMap` | `{ y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' }` |
| `[height]` | Height | `number` | `450` |
| `[padding]` | Padding of the chart | `number[]` | `[40, 8, 64, 40]` |
| `[borderWidth]` | Line width | `number` | `2` |
| `[mask]` | Date format, using the [G2 mask date format](https://g2.antv.vision/zh/docs/manual/tutorial/scale#time) | `string` | `HH:mm` |
| `[maskSlider]` | Slider date format, using the [date-fns date format](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table) | `string` | `HH:mm` |
| `[position]` | Position of the title | `'top','right','bottom','left'` | `'top'` |
| `[slider]` | Whether the slider is required | `boolean` | `true` |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
| `(clickItem)` | Callback when clicking an item | `output<G2TimelineClickItem>` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |

### G2TimelineData

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[time]` | Date format | `Date \| number` | - |
| `[y1]` | Data of indicator 1 | `number` | - |
| `[y2]` | Data of indicator 2 | `number` | - |
| `[y3]` | Data of indicator 3 | `number` | - |
| `[y4]` | Data of indicator 4 | `number` | - |
| `[y5]` | Data of indicator 5 | `number` | - |

### G2TimelineMap

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[y1]` | Indicator 1 | `string` | - |
| `[y2]` | Indicator 2 | `string` | - |
| `[y3]` | Indicator 3 | `string` | - |
| `[y4]` | Indicator 4 | `string` | - |
| `[y5]` | Indicator 5 | `string` | - |
