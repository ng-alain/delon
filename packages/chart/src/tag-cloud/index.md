---
title: g2-tag-cloud
subtitle: 标签云
cols: 1
module: AdG2TagCloudModule
type: Components
---

标签云是一套相关的标签以及与此相应的权重展示方式，一般典型的标签云有 30 至 150 个标签，而权重影响使用的字体大小或其他视觉效果。

## API

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| `[data]` | 标题 | `Array<{ x: string, value: number, category?: any, [key: string]: any }>` | - |
| `[height]` | 高度值 | `number` | - |

**数据说明**

| 名称 | 说明 |
| --- | --- |
| `x` | 显示标签云名称 |
| `value` | 决定字体大小 |
| `category` | 决定颜色视觉分类 |
