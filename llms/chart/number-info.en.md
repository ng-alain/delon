---
type: G2
title: number-info
subtitle: NumberInfo
cols: 2
module: import { NumberInfoModule } from '@delon/chart/number-info';
---

Often used in data cards for highlighting the business data.

## API

### number-info

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[title]` | title | `TemplateRef<void>` | - |
| `[subTitle]` | subtitle | `TemplateRef<void>` | - |
| `[total]` | total amount | `string, number` | - |
| `[suffix]` | total amount suffix | `string` | - |
| `[subTotal]` | total amount of additional information | `string, number` | - |
| `[status]` | increase state | `'up','down'` | - |
| `[theme]` | state style | `'light','default'` | `'light'` |
| `[gap]` | set the spacing (pixels) between numbers and descriptions | `number` | 8 |

---

## Examples

### Basic

```typescript
import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'chart-number-info-basic',
  template: ` <number-info subTitle="本周访问" total="12,321" subTotal="17.1" status="up" /> `,
  imports: [NumberInfoModule]
})
export class ChartNumberInfoBasic {}
```

### undefined

```typescript
import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'chart-number-info-theme',
  template: ` <number-info subTitle="本周访问" total="12,321" subTotal="17.1" status="down" theme="default" /> `,
  imports: [NumberInfoModule]
})
export class ChartNumberInfoTheme {}
```

### Multiple

Should be show a separator when multiple `number-info` components.

```typescript
import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'chart-number-info-multiple',
  template: `
    <number-info subTitle="今日访问" total="12,321" />
    <number-info subTitle="本周访问" total="12,32100" />
    <number-info subTitle="本月访问" total="12,32100000" />
  `,
  imports: [NumberInfoModule]
})
export class ChartNumberInfoMultiple {}
```
