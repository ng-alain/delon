---
title: g2-timeline
subtitle: 折线图
cols: 1
module: G2TimelineModule
type: Components
---

使用 `timeline` 组件可以实现带有时间轴的柱状图展现，而其中的 `x` 属性，则是时间值的指向，默认最多支持同时展现两个指标，分别是 `y1` 和 `y2`。

## API

### g2-timeline

| 参数            | 说明               | 类型                          | 默认值                             |
|-----------------|------------------|-------------------------------|------------------------------------|
| `[delay]`       | 延迟渲染，单位：毫秒 | `number`                      | `0`                                |
| `[title]`       | 图表标题           | `string,TemplateRef<void>`    | -                                  |
| `[data]`        | 数据               | `G2TimelineData[]`            | -                                  |
| `[titleMap]`    | 指标别名           | `{ y1: string , y2: string }` | -                                  |
| `[colorMap]`    | 颜色               | `{ y1: string , y2: string }` | `{ y1: '#1890FF', y2: '#2FC25B' }` |
| `[height]`      | 高度值             | `number`                      | `400`                              |
| `[padding]`     | 图表内部间距       | `number[]`                    | `[60, 20, 40, 40]`                 |
| `[borderWidth]` | 线条               | `number`                      | `2`                                |
| `[mask]`        | 日期格式           | `string`                      | `HH:mm`                            |
| `[position]`    | 标题位置           | `'top','right','bottom','left'`  | `'top'`                            |
| `[slider]`      | 是否需要滑动条     | `boolean`                     | `true`                             |

### G2TimelineData

| 参数   | 说明      | 类型                     | 默认值 |
|--------|---------|--------------------------|--------|
| `[x]`  | 非 `Date` 格式，自动使用 `new Date` 转换，因此，支持时间格式字符串、数字型时间戳 | `Date | string | number` | - |
| `[y1]` | 指标1数据 | `number`                 | -      |
| `[y2]` | 指标2数据 | `number`                 | -      |
