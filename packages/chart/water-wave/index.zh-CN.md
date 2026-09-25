---
title: g2-water-wave
subtitle: 水波图
cols: 1
type: G2
module: import { G2WaterWaveModule } from '@delon/chart/water-wave';
---

水波图是一种比例的展示方式，可以更直观的展示关键值的占比。渲染基于 G2 v5 的 [`liquid`](https://g2.antv.antgroup.com/examples/general/Liquid) 图形标记。

> 尺寸自适应由 v5 的 `autoFit` 负责；容器比 `[size]` 更窄时请直接调小 `[size]`。需要手动重绘时使用公开的 `render()`。

## API

### g2-water-wave

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[animate]` | 是否显示进场动画（水波自身的流动由 G2 内置、始终运行） | `boolean` | `true` |
| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |
| `[size]` | 图表尺寸（正方形边长） | `number` | `160` |
| `[color]` | 图表颜色（水波与圆环同色） | `string` | `#1890FF` |
| `[percent]` | 进度比例，取值 `0` ~ `100` | `number` | - |
| `[padding]` | 图表内部间距 | `number \| number[] \| 'auto'` | `8` |
| `[theme]` | 定制图表主题 | `string \| LooseObject` | - |
| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |
| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |
