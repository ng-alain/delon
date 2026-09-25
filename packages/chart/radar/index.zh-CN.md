---
title: g2-radar
subtitle: 雷达图
cols: 1
type: G2
module: import { G2RadarModule } from '@delon/chart/radar';
---

雷达图是以相同点开始的轴上表示的三个或更多个定量变量的二维图形的形式显示多变量数据的图形方法。轴的相对位置和角度通常是不知情的。

## API

### g2-radar

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[title]` | 图表标题 | `string,TemplateRef<void>` | - |
| `[height]` | 图表高度 | `number` | - |
| `[hasLegend]` | 是否显示 legend | `boolean` | `true` |
| `[padding]` | 图表内部间距 | `array` | `[44, 30, 16, 30]` |
| `[tickCount]` | y 轴刻度数量 | `number` | `4` |
| `[colors]` | 颜色列表 | `string[]` | `['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911']` |
| `[data]` | 数据 | `G2RadarData[]` | - |
| `[theme]` | 定制图表主题 | `string \| LooseObject` | - |
| `(clickItem)` | 点击项回调 | `output<G2RadarClickItem>` | - |
| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |
| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |

### G2RadarData

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[name]` | 名称 | `string` | - |
| `[label]` | 标签 | `string` | - |
| `[value]` | 值 | `number` | - |

