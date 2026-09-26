---
title: g2-mini-bar
subtitle: Mini Bar
cols: 2
type: G2
module: import { G2MiniBarModule } from '@delon/chart/mini-bar';
---

A mini bar chart is better for displaying simple interval data; its concise presentation greatly reduces the visual pressure of large amounts of data.

## API

### g2-mini-bar

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[color]` | Color of the chart | `string` | `#1890FF` |
| `[height]` | Height of the chart | `number` | - |
| `[yTooltipSuffix]` | Suffix of the y-axis tooltip, usually used to specify the unit | `string` | - |
| `[tooltipType]` | Tooltip type | `'mini','default'` | `'default'` |
| `[borderWidth]` | Line width | `number` | `5` |
| `[padding]` | Padding of the chart | `array` | `[8, 8, 8, 8]` |
| `[data]` | Data | `G2MiniBarData[]` | - |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
| `(clickItem)` | Callback when clicking an item | `output<G2MiniBarClickItem>` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |

### G2MiniBarData

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[x]` | x-axis | `any` | - |
| `[y]` | y-axis | `any` | - |
| `[color]` | Color of the axis | `string` | - |

---

## Examples

### Basic

Basic usage.

```typescript
import { Component, inject, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaClickItem, G2MiniAreaData } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-mini-bar-basic',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-mini-bar height="45" [data]="visitData()" (clickItem)="handleClick($event)" />
  `,
  imports: [NzButtonModule, G2MiniBarModule]
})
export class ChartMiniBarBasic {
  private readonly msg = inject(NzMessageService);
  readonly visitData = signal(this.genData());

  private genData(): G2MiniAreaData[] {
    const beginDay = new Date().getTime();
    const res: G2MiniAreaData[] = [];
    for (let i = 0; i < 20; i += 1) {
      res.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    return res;
  }

  refresh(): void {
    this.visitData.set(this.genData());
  }

  handleClick(data: G2MiniAreaClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }
}
```

### undefined

Set `tooltipType` to use a simplified tooltip, which works better inside tables.

```typescript
import { Component, OnInit, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniBarData, G2MiniBarModule } from '@delon/chart/mini-bar';

@Component({
  selector: 'chart-mini-bar-mini',
  template: ` <g2-mini-bar height="45" [data]="visitData()" yTooltipSuffix="%" tooltipType="mini" /> `,
  imports: [G2MiniBarModule]
})
export class ChartMiniBarMini implements OnInit {
  readonly visitData = signal<G2MiniBarData[]>([]);

  ngOnInit(): void {
    const beginDay = new Date().getTime();
    const visitData: G2MiniBarData[] = [];
    for (let i = 0; i < 20; i += 1) {
      visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    this.visitData.set(visitData);
  }
}
```

### undefined

Set `yTooltipSuffix` to show the unit.

```typescript
import { Component, OnInit, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniBarData, G2MiniBarModule } from '@delon/chart/mini-bar';

@Component({
  selector: 'chart-mini-bar-tooltip',
  template: ` <g2-mini-bar height="45" [data]="visitData()" yTooltipSuffix="%" /> `,
  imports: [G2MiniBarModule]
})
export class ChartMiniBarTooltip implements OnInit {
  readonly visitData = signal<G2MiniBarData[]>([]);

  ngOnInit(): void {
    const beginDay = new Date().getTime();
    const visitData: G2MiniBarData[] = [];
    for (let i = 0; i < 20; i += 1) {
      visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    this.visitData.set(visitData);
  }
}
```
