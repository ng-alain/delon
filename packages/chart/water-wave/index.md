---
title: g2-water-wave
subtitle: 水波图
cols: 1
type: Components
module: import { G2WaterWaveModule } from '@delon/chart/water-wave';
---

水波图是一种比例的展示方式，可以更直观的展示关键值的占比。

> 默认不支持父元素自适应，可以监听父元素的变化并使用 `render()` 方法来重置渲染。

## API

### g2-water-wave

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[animate]` | 是否显示动画 | `boolean` | `true` |
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |
| `[height]` | 图表高度 | `number` | `160` |
| `[color]` | 图表颜色 | `string` | `#1890FF` |
| `[percent]` | 进度比例 | `number` | - |
