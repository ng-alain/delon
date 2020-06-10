---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

基础用法。

```ts
import { Component, OnInit } from '@angular/core';
import { G2PieClickItem, G2PieData } from '@delon/chart/pie';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <g2-pie
    [hasLegend]="true"
    title="销售额"
    subTitle="销售额"
    [total]="total"
    [valueFormat]="format"
    [data]="salesPieData"
    height="294"
    (clickItem)="handleClick($event)"
  ></g2-pie>`,
})
export class DemoComponent implements OnInit {
  salesPieData: G2PieData[] = [
    {
      x: '家用电器',
      y: 4544,
    },
    {
      x: '食用酒水',
      y: 3321,
    },
    {
      x: '个护健康',
      y: 3113,
    },
    {
      x: '服饰箱包',
      y: 2341,
    },
    {
      x: '母婴产品',
      y: 1231,
    },
    {
      x: '其他',
      y: 1231,
    },
  ];
  total: string;

  constructor(private msg: NzMessageService) {}

  ngOnInit(): void {
    this.total = `&yen ${this.salesPieData.reduce((pre, now) => now.y + pre, 0).toFixed(2)}`;
  }

  format(val: number) {
    return `&yen ${val.toFixed(2)}`;
  }

  handleClick(data: G2PieClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }
}
```
