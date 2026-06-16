---
title: g2-mini-progress
subtitle: 迷你进度条
cols: 1
type: G2
module: import { G2MiniProgressModule } from '@delon/chart/mini-progress';
---

用于显示跟速度相关图形再适合不过。

## API

### g2-mini-progress

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[target]` | 目标比例 | `number` | - |
| `[color]` | 进度条颜色 | `string` | - |
| `[strokeWidth]` | 进度条高度 | `number` | - |
| `[percent]` | 进度比例 | `number` | - |

---

## 代码示例

### 基础

基础用法。

```typescript
import { Component } from '@angular/core';

import { G2MiniProgressModule } from '@delon/chart/mini-progress';

@Component({
  selector: 'chart-mini-progress-basic',
  template: ` <g2-mini-progress percent="78" strokeWidth="8" target="80" /> `,
  imports: [G2MiniProgressModule]
})
export class ChartMiniProgressBasic {}
```
