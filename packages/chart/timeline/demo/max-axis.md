---
order: 1
title:
  zh-CN: 多指标
  en-US: Multiple indicators
---

利用 `maxAxis` 属性来调整多个指标，最多支持 `5` 个指标值。

```ts
import { Component, OnInit } from '@angular/core';
import { G2TimelineData, G2TimelineMap } from '@delon/chart/timeline';

@Component({
  selector: 'app-demo',
  template: ` <g2-timeline maxAxis="5" [data]="chartData" [titleMap]="titleMap" [height]="300"></g2-timeline>`,
})
export class DemoComponent implements OnInit {
  chartData: G2TimelineData[] = [];
  titleMap: G2TimelineMap = { y1: '指标1', y2: '指标2', y3: '指标3', y4: '指标4', y5: '指标5' };
  ngOnInit(): void {
    for (let i = 0; i < 20; i += 1) {
      this.chartData.push({
        time: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 500,
        y2: Math.floor(Math.random() * 100) + 1000,
        y3: Math.floor(Math.random() * 100) + 1500,
        y4: Math.floor(Math.random() * 100) + 2000,
        y5: Math.floor(Math.random() * 100) + 2500,
      });
    }
  }
}
```
