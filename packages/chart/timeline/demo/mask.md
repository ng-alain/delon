---
order: 2
title:
  zh-CN: 时间格式化
  en-US: Time mask format
---

利用 `mask` 和 `maskSlider` 来改变时间格式。

```ts
import { Component, OnInit, inject } from '@angular/core';

import { G2TimelineClickItem, G2TimelineData, G2TimelineModule } from '@delon/chart/timeline';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <g2-timeline
    [data]="chartData"
    [titleMap]="{ y1: '客流量', y2: '支付笔数' }"
    [height]="200"
    mask="MM月DD日"
    maskSlider="MM月dd日"
    (clickItem)="handleClick($event)"
  />`,
  imports: [G2TimelineModule]
})
export class DemoComponent implements OnInit {
  private readonly msg = inject(NzMessageService);
  chartData: G2TimelineData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 20; i += 1) {
      this.chartData.push({
        time: new Date().getTime() + 1000 * 60 * 60 * 24 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10
      });
    }
  }

  handleClick(data: G2TimelineClickItem): void {
    this.msg.info(`客流量: ${data.item.y1}, 支付笔数: ${data.item.y2}`);
  }
}
```
