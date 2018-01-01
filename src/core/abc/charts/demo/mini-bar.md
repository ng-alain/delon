---
order: 2
title: 迷你柱状图
---

迷你柱状图更适合展示简单的区间数据，简洁的表现方式可以很好的减少大数据量的视觉展现压力。

```ts
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-demo',
  template: `
  <mini-bar height="45" [data]="visitData"></mini-bar>
  `
})
export class DemoComponent implements OnInit {
    visitData: any[] = [];
    ngOnInit(): void {
        const beginDay = new Date().getTime();
        for (let i = 0; i < 20; i += 1) {
            this.visitData.push({
                x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
                y: Math.floor(Math.random() * 100) + 10,
            });
        }
    }
}
```
