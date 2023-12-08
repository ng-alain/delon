---
order: 2
title: Mini tooltip
---

指定 `tooltipType` 值来表示简化tooltip，可以更好的运用于表格。

```ts
import { Component, OnInit } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';

@Component({
  selector: 'app-demo',
  template: ` <g2-mini-area line color="#cceafe" height="45" [data]="visitData" tooltipType="mini" /> `,
  standalone: true,
  imports: [G2MiniAreaModule]
})
export class DemoComponent implements OnInit {
  visitData: G2MiniAreaData[] = [];
  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
  }
}
```
