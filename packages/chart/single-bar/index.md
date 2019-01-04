---
title: g2-single-bar
subtitle: 单一柱状图
cols: 1
module: G2SingleBarModule
type: Components
---

单一柱状图更适合在列表中展示简单的区间数据，简洁的表现方式可以很好的减少大数据量的视觉展现压力。

## API

### g2-single-bar

| 参数      | 说明                 | 类型         | 默认值 |
|----------|----------------------|-------------|-------|
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[plusColor]` | 图表颜色 | `string` | `#40a9ff` |
| `[minusColor]` | 负值图表颜色 | `string` | `#ff4d4f` |
| `[height]` | 图表高度 | `number` | `60` |
| `[barSize]` | 柱状高度 | `number` | `30` |
| `[min]` | 最大值，若小于0表示显示负值 | `number` | `0` |
| `[max]` | 最小值 | `number` | `100` |
| `[padding]` | 图表内部间距 | `any` | `0` |
| `[value]` | 值 | `number` | `0` |
| `[format]` | 显示值格式 | `(value: number) => string` | - |
| `[textStyle]` | 显示值样式 | `any` | `{ fontSize: 12, color: '#595959' }` |
