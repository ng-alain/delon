---
order: 1
title:
  zh-CN: 多指标
  en-US: Multiple indicators
---

利用 `maxAxis` 属性来调整多个指标，最多支持 `5` 个指标值。

```ts
import { Component } from '@angular/core';
import { G2TimelineData, G2TimelineMap } from '@delon/chart/timeline';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <button nz-button (click)="refreshData()" nzType="primary">Refresh Data</button>
    <g2-timeline [maxAxis]="maxAxis" [data]="chartData" [titleMap]="titleMap" [height]="300"></g2-timeline>
  `,
})
export class DemoComponent {
  chartData: G2TimelineData[] = [];
  titleMap: G2TimelineMap = { y1: '指标1', y2: '指标2' };
  maxAxis = 5;

  constructor() {
    this.refresh();
  }

  private genData(hideY5: boolean): G2TimelineData[] {
    const res: G2TimelineData[] = [];
    for (let i = 0; i < 20; i += 1) {
      const item: G2TimelineData = {
        time: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 500,
        y2: Math.floor(Math.random() * 100) + 1000,
        y3: Math.floor(Math.random() * 100) + 1500,
        y4: Math.floor(Math.random() * 100) + 2000,
        y5: Math.floor(Math.random() * 100) + 2500,
      };
      if (hideY5) delete item.y5;
      res.push(item);
    }
    return res;
  }

  refresh(): void {
    const titleMap: G2TimelineMap = { y1: '指标1', y2: '指标2', y3: '指标3', y4: '指标4', y5: '指标5' };
    const hideY5 = Math.random() > 0.5;
    if (hideY5) delete titleMap.y5;
    this.chartData = this.genData(hideY5);
    this.titleMap = titleMap;
    this.maxAxis = hideY5 ? 4 : 5;
  }

  refreshData(): void {
    this.chartData = this.genData(this.maxAxis === 4);
  }
}
```
