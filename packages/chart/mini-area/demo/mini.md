---
order: 2
title: Mini tooltip
---

## zh-CN

指定 `tooltipType` 值来表示简化tooltip，可以更好的运用于表格。

## en-US

Set `tooltipType` to use a simplified tooltip, which works better inside tables.

```ts
import { Component, OnInit, signal } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';

@Component({
  selector: 'app-demo',
  template: ` <g2-mini-area line color="#cceafe" height="45" [data]="visitData()" tooltipType="mini" /> `,
  imports: [G2MiniAreaModule]
})
export class DemoComponent implements OnInit {
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
