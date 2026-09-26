---
title: g2-gauge
subtitle: Gauge
cols: 1
type: G2
module: import { G2GaugeModule } from '@delon/chart/gauge';
---

A way to display progress, which shows the current progress more intuitively and can also represent a percentage.

## API

### g2-gauge

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[title]` | Title of the chart | `string` | - |
| `[height]` | Height of the chart | `number` | - |
| `[width]` | Width of the chart | `number` | - |
| `[color]` | Color of the chart | `string` | `#2F9CFF` |
| `[bgColor]` | Background color of the chart | `string` | `#F0F2F5` |
| `[percent]` | Percentage | `number` | - |
| `[fontSize]` | Base font size of the chart (the center value scales with `1.4em`) | `number` | `14` |
| `[padding]` | Padding | `Array<number \| string>` | `16` |
| `[format]` | Formatter of the axis label | `(text: string, item: {}, index: number) => string` | - |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |

---

## Examples

### Basic

Basic usage.

```typescript
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

import { G2GaugeModule } from '@delon/chart/gauge';

@Component({
  selector: 'chart-gauge-basic',
  template: `
    @let title = '核销率';
    @let size = 164;
    <g2-gauge [title]="title" [height]="size" [width]="size" [percent]="percent()" [color]="color()" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [G2GaugeModule]
})
export class ChartGaugeBasic {
  readonly percent = signal(36);
  readonly color = signal('#2f9cff');

  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        const percent = parseInt((Math.random() * 100).toString(), 10);
        this.percent.set(percent);
        this.color.set(percent > 50 ? '#f50' : '#2f9cff');
      });
  }
}
```
