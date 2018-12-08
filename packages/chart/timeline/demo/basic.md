---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

带有时间轴的图表。

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <g2-timeline
        [data]="chartData"
        [titleMap]="{y1: '客流量', y2: '支付笔数'}"
        [height]="200"></g2-timeline>`,
})
export class DemoComponent implements OnInit {
  chartData: any[] = [];
  ngOnInit(): void {
    for (let i = 0; i < 20; i += 1) {
      this.chartData.push({
        x: (new Date().getTime()) + (1000 * 60 * 30 * i),
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10,
      });
    }
  }
}
```
