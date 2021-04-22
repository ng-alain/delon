---
title: g2-timeline
subtitle: 折线图
cols: 1
type: Components
module: import { G2TimelineModule } from '@delon/chart/timeline';
---

使用 `timeline` 组件可以实现带有时间轴的柱状图展现，而其中的 `x` 属性，则是时间值的指向，默认最多支持同时展现两个指标，分别是 `y1` 和 `y2`。

## API

### g2-timeline

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |
| `[maxAxis]` | 最大指标数量 | `number` | `2` |
| `[data]` | 数据 | `G2TimelineData[]` | - |
| `[titleMap]` | 指标别名 | `G2TimelineMap` | - |
| `[colorMap]` | 颜色 | `G2TimelineMap` | `{ y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' }` |
| `[height]` | 高度值 | `number` | `400` |
| `[padding]` | 图表内部间距 | `number[]` | `[40, 8, 64, 40]` |
| `[borderWidth]` | 线条 | `number` | `2` |
| `[mask]` | 日期格式，使用 [G2 Mask日期格式](https://g2.antv.vision/zh/docs/manual/concepts/data-and-scales#time) | `string` | `HH:mm` |
| `[maskSlider]` | 滑动条日期格式，使用 [date-fns 日期格式](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table) | `string` | `HH:mm` |
| `[position]` | 标题位置 | `'top','right','bottom','left'` | `'top'` |
| `[slider]` | 是否需要滑动条 | `boolean` | `true` |
| `[theme]` | 定制图表主题 | `string | LooseObject` | - |
| `(clickItem)` | 点击项回调 | `EventEmitter<G2TimelineClickItem>` | - |

### G2TimelineData

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[time]` | 日期格式 | `Date | number` | - |
| `[y1]` | 指标1数据 | `number` | - |
| `[y2]` | 指标2数据 | `number` | - |
| `[y3]` | 指标3数据 | `number` | - |
| `[y4]` | 指标4数据 | `number` | - |
| `[y5]` | 指标5数据 | `number` | - |

### G2TimelineMap

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[y1]` | 指标1 | `string` | - |
| `[y2]` | 指标2 | `string` | - |
| `[y3]` | 指标3 | `string` | - |
| `[y4]` | 指标4 | `string` | - |
| `[y5]` | 指标5 | `string` | - |
