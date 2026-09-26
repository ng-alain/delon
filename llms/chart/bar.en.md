---
title: g2-bar
subtitle: Bar
cols: 1
type: G2
module: import { G2BarModule } from '@delon/chart/bar';
---

Use vertical bars to compare values between categories. One axis represents the categorical dimension to compare, and the other represents the corresponding value.

## API

### g2-bar

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[title]` | Title of the chart | `string,TemplateRef<void>` | - |
| `[color]` | Color of the chart | `string` | `rgba(24, 144, 255, 0.85)` |
| `[padding]` | Padding of the chart, `'auto'` means G2 calculates it automatically | `Array<number \| string> \| string` | `'auto'` |
| `[height]` | Height of the chart | `number` | - |
| `[data]` | Data | `G2BarData[]` | `[]` |
| `[autoLabel]` | Automatically hide the x-axis label when the width is insufficient | `boolean` | `true` |
| `[interaction]` | Interaction type: `none` (no interaction), `element-active` (active element), `active-region` (chart component), `brush` (brush selection), `drag-move` (drag to move) | `InteractionType` | `none` |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
| `(clickItem)` | Callback when clicking an item | `output<G2BarClickItem>` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |

### G2BarData

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[x]` | x-axis | `any` | - |
| `[y]` | y-axis | `any` | - |
| `[color]` | Color of the axis | `string` | - |

---

## Examples

### Basic

By setting the `x` and `y` attributes, you can quickly build a beautiful bar chart, and the relationship between the various dimensions is presented through custom data.

```typescript
import { Component, inject, signal } from '@angular/core';

import { G2BarClickItem, G2BarData, G2BarModule } from '@delon/chart/bar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-bar-basic',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-bar height="200" [title]="'销售额趋势'" [data]="salesData()" (clickItem)="handleClick($event)" />
  `,
  imports: [NzButtonModule, G2BarModule]
})
export class ChartBarBasic {
  private readonly msg = inject(NzMessageService);

  readonly salesData = signal(this.genData());

  private genData(): G2BarData[] {
    return new Array(12).fill({}).map((_i, idx) => ({
      x: `${idx + 1}月`,
      y: Math.floor(Math.random() * 1000) + 200,
      color: idx > 5 ? '#f50' : undefined
    }));
  }

  refresh(): void {
    this.salesData.set(this.genData());
  }

  handleClick(data: G2BarClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }
}
```
