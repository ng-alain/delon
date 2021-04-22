---
title: g2-pie
subtitle: 饼状图
cols: 1
type: G2
module: import { G2PieModule } from '@delon/chart/pie';
---

用于显示跟速度相关图形再适合不过。

## API

### g2-pie

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[animate]` | 是否显示动画 | `boolean` | `true` |
| `[color]` | 图表颜色 | `string` | `rgba(24, 144, 255, 0.85)` |
| `[height]` | 图表高度 | `number` | - |
| `[hasLegend]` | 是否显示 legend | `boolean` | `false` |
| `[padding]` | 图表内部间距 | `number[]` | `[12, 0, 12, 0]` |
| `[percent]` | 占比 | `number` | - |
| `[lineWidth]` | 边框粗细 | `number` | `0` |
| `[inner]` | 内部极坐标系的半径 | `number` | `0.75` |
| `[blockMaxWidth]` | 多少宽度为块显示 | `number` | `380` |
| `[tooltip]` | 是否显示 tooltip | `boolean` | `true` |
| `[subTitle]` | 图表子标题 | `string,TemplateRef<void><void>` | - |
| `[total]` | 总量 | `string,number,TemplateRef<void><void>` | - |
| `[valueFormat]` | y轴格式化 | `(y: number) => string` | - |
| `[data]` | 数据 | `G2PieData[]` | - |
| `[interaction]` | 交互类型，none 无 element-active 图形元素，active-region 图表组件，brush 框选，drag-move 移动 | `InteractionType` | `none` |
| `[ratio]` | 百分比配置项 | `G2PieRatio` | `{ text: '占比', inverse: '反比', color: '', inverseColor: '#F0F2F5' }` |
| `[theme]` | 定制图表主题 | `string | LooseObject` | - |
| `(clickItem)` | 点击项回调 | `EventEmitter<G2PieClickItem>` | - |

### G2PieData

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[x]` | x轴 | `any` | - |
| `[y]` | y轴 | `number` | - |

