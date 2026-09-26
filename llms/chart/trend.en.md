---
type: G2
title: trend
subtitle: Trend
cols: 1
module: import { TrendModule } from '@delon/chart/trend';
---

Trend symbols mark rising and falling trends. Green usually means "good" and red means "bad", except in stock market scenarios.

## API

### trend

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[colorful]` | Whether to use colorful marks | `boolean` | `true` |
| `[flag]` | Rising or falling flag | `'up','down'` | - |
| `[reverseColor]` | Whether to reverse the color | `boolean` | `false` |

---

## Examples

### Demo

Add a small icon behind the value to indicate the rise and fall.

```typescript
import { Component } from '@angular/core';

import { TrendModule } from '@delon/chart/trend';

@Component({
  selector: 'chart-trend-basic',
  template: `
    <trend flag="up">12%</trend>
    <trend flag="down" class="ml-sm">11%</trend>
  `,
  imports: [TrendModule]
})
export class ChartTrendBasic {}
```

### Color reverse

Add a small icon behind the value to indicate the rise and fall.

```typescript
import { Component } from '@angular/core';

import { TrendModule } from '@delon/chart/trend';

@Component({
  selector: 'chart-trend-reverse',
  template: `
    <trend flag="up" reverseColor>12%</trend>
    <trend flag="down" reverseColor class="ml-sm">11%</trend>
  `,
  imports: [TrendModule]
})
export class ChartTrendReverse {}
```
