---
order: 0
title: Mini tooltip
---

指定 `tooltipType` 值来表示简化tooltip，可以更好的运用于表格。

```ts
import { Component, OnInit } from '@angular/core';
import format from 'date-fns/format';

@Component({
  selector: 'app-demo',
  template: `
  <g2-mini-bar height="45" [data]="visitData" yTooltipSuffix="%" tooltipType="mini"></g2-mini-bar>
  `
})
export class DemoComponent implements OnInit {
  visitData: any[] = [];
  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + (1000 * 60 * 60 * 24 * i)), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10,
      });
    }
  }
}
```
