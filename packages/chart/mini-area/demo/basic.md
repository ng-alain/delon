---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

基础用法。

```ts
import { Component, OnInit } from '@angular/core';
import { G2MiniAreaClickItem, G2MiniAreaData } from '@delon/chart/mini-area';
import format from 'date-fns/format';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <g2-mini-area line color="#cceafe" height="45" [data]="visitData" (clickItem)="handleClick($event)"></g2-mini-area> `,
})
export class DemoComponent implements OnInit {
  visitData: G2MiniAreaData[] = [];

  constructor(private msg: NzMessageService) {}

  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10,
      });
    }
  }

  handleClick(data: G2MiniAreaClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }
}
```
