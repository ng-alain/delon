---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

基础用法。

```ts
import { Component } from '@angular/core';
import { G2PieClickItem, G2PieData } from '@delon/chart/pie';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-pie
      [hasLegend]="true"
      title="销售额"
      subTitle="销售额"
      [total]="total"
      [valueFormat]="format"
      [data]="salesPieData"
      height="294"
      (clickItem)="handleClick($event)"
    ></g2-pie>
  `,
})
export class DemoComponent {
  salesPieData: G2PieData[] = [];
  total = '';

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 0, max: number = 5000) => Math.floor(Math.random() * (max - min + 1) + min);
    this.salesPieData = [
      {
        x: '家用电器',
        y: rv(),
      },
      {
        x: '食用酒水',
        y: rv(),
      },
      {
        x: '个护健康',
        y: rv(),
      },
      {
        x: '服饰箱包',
        y: rv(),
      },
      {
        x: '母婴产品',
        y: rv(),
      },
    ];
    if (Math.random() > 0.5) {
      this.salesPieData.push({
        x: '其他',
        y: rv(),
      });
    }
    this.total = `&yen ${this.salesPieData.reduce((pre, now) => now.y + pre, 0).toFixed(2)}`;
  }

  format(val: number): string {
    return `&yen ${val.toFixed(2)}`;
  }

  handleClick(data: G2PieClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }
}
```
