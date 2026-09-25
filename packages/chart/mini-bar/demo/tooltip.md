---
order: 0
title: Tooltip
---

## zh-CN

指定 `yTooltipSuffix` 值来表示单位。

## en-US

Set `yTooltipSuffix` to show the unit.

```ts
import { Component, OnInit, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniBarData, G2MiniBarModule } from '@delon/chart/mini-bar';

@Component({
  selector: 'app-demo',
  template: ` <g2-mini-bar height="45" [data]="visitData()" yTooltipSuffix="%" /> `,
  imports: [G2MiniBarModule]
})
export class DemoComponent implements OnInit {
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
