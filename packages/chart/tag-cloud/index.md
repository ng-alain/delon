---
title: g2-tag-cloud
subtitle: 标签云
cols: 1
module: G2TagCloudModule
type: Components
---

标签云是一套相关的标签以及与此相应的权重展示方式，一般典型的标签云有 30 至 150 个标签，而权重影响使用的字体大小或其他视觉效果。

## API

### g2-tag-cloud

| 参数       | 说明               | 类型               | 默认值 |
|------------|------------------|--------------------|--------|
| `[delay]`  | 延迟渲染，单位：毫秒 | `number`           | `0`    |
| `[height]` | 高度值             | `number`           | `100`      |
| `[data]`   | 数据               | `G2TagCloudData[]` | `[]`      |

### G2TagCloudData

| 参数      | 说明 | 类型     | 默认值 |
|-----------|-----|----------|--------|
| `[x]`  | 名称 | `string` | -      |
| `[value]` | 值   | `number` | -      |
| `[category]` | 分组 | `any` | -      |
