---
title: g2-tag-cloud
subtitle: 标签云
cols: 1
type: G2
module: import { G2TagCloudModule } from '@delon/chart/tag-cloud';
---

标签云是一套相关的标签以及与此相应的权重展示方式，一般典型的标签云有 30 至 150 个标签，而权重影响使用的字体大小或其他视觉效果。

## API

### g2-tag-cloud

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `200` |
| `[height]` | 高度值 | `number` | `200` |
| `[width]` | 宽度值，若不指定自动按宿主元素的宽度 | `number` | `0` |
| `[data]` | 数据 | `G2TagCloudData[]` | `[]` |
| `[theme]` | 定制图表主题 | `string | LooseObject` | - |
| `(clickItem)` | 点击项回调 | `EventEmitter<G2TagCloudClickItem>` | - |

### G2TagCloudData

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[name]` | 名称 | `string` | - |
| `[value]` | 值 | `number` | - |
