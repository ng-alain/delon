---
title: g2-mini-area
subtitle: Mini Area
cols: 2
type: G2
module: import { G2MiniAreaModule } from '@delon/chart/mini-area';
---

An area chart is also called an area graph. It is built on top of a line chart: the area between the line and the axis is filled with a color or texture, and this filled area is called an area. The color fill highlights the trend information better.

## API

### g2-mini-area

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[color]` | Color of the chart | `string` | `rgba(24, 144, 255, 0.2)` |
| `[borderColor]` | Border color of the chart | `string` | `#1890FF` |
| `[borderWidth]` | Border width of the chart | `number` | `2` |
| `[fit]` | Whether to fit the container size (`autoFit`) | `boolean` | `true` |
| `[height]` | Height of the chart | `number` | `56` |
| `[line]` | Whether to display the line | `boolean` | `false` |
| `[animate]` | Whether to display the animation | `boolean` | `true` |
| `[padding]` | Padding of the chart | `array` | `[8, 8, 8, 8]` |
| `[xAxis]` | x-axis options (passed to the v5 `AxisComponent`) | `object` | - |
| `[yAxis]` | y-axis options (passed to the v5 `AxisComponent`) | `object` | - |
| `[yTooltipSuffix]` | Suffix of the y-axis tooltip, usually used to specify the unit | `string` | - |
| `[tooltipType]` | Tooltip type | `'mini','default'` | `'default'` |
| `[data]` | Data | `G2MiniAreaData[]` | - |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
| `(clickItem)` | Callback when clicking an item | `output<G2MiniAreaClickItem>` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |

### G2MiniAreaData

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[x]` | x-axis | `any` | - |
| `[y]` | y-axis | `any` | - |

---

## Examples

### Basic

Basic usage.

```typescript
import { Component, inject, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaClickItem, G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-mini-area-basic',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-mini-area line color="#cceafe" height="45" [data]="visitData()" (clickItem)="handleClick($event)" />
  `,
  imports: [NzButtonModule, G2MiniAreaModule]
})
export class ChartMiniAreaBasic {
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

Set `yTooltipSuffix` to show the unit.

```typescript
import { Component, OnInit, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';

@Component({
  selector: 'chart-mini-area-tooltip',
  template: ` <g2-mini-area line color="#cceafe" height="45" [data]="visitData()" yTooltipSuffix="%" /> `,
  imports: [G2MiniAreaModule]
})
export class ChartMiniAreaTooltip implements OnInit {
  readonly visitData = signal<G2MiniAreaData[]>([]);

  ngOnInit(): void {
    const beginDay = new Date().getTime();
    const visitData: G2MiniAreaData[] = [];
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

Set `tooltipType` to use a simplified tooltip, which works better inside tables.

```typescript
import { Component, OnInit, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';

@Component({
  selector: 'chart-mini-area-mini',
  template: ` <g2-mini-area line color="#cceafe" height="45" [data]="visitData()" tooltipType="mini" /> `,
  imports: [G2MiniAreaModule]
})
export class ChartMiniAreaMini implements OnInit {
  readonly visitData = signal<G2MiniAreaData[]>([]);

  ngOnInit(): void {
    const beginDay = new Date().getTime();
    const visitData: G2MiniAreaData[] = [];
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
