---
type: Components
title: trend
subtitle: 趋势标记
cols: 1
module: import { TrendModule } from '@delon/chart/trend';
---

趋势符号，标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外。

## API

### trend

成员 | 说明 | 类型 | 默认值
----|------|-----|------
`[colorful]` | 是否彩色标记 | `boolean` | `true`
`[flag]` | 上升下降标识 | `'up','down'` | -
`[reverseColor]` | 颜色反转 | `boolean` | `false`
