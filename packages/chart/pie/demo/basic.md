---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN

基础用法。默认情况下丝滑更新数据的判断标准是以只更新 `data` 为准，这里利用 `repaint` 进行手动调用 `changeData` 改变数据达到丝滑更新的效果。

## en-US

Basic usage. By default, a smooth data update is detected only when `data` changes, so here `repaint` is used to manually call `changeData` and update the data to achieve the same smooth effect.

```ts
import { Component, signal, viewChild } from '@angular/core';

import { G2PieClickItem, G2PieComponent, G2PieData, G2PieModule } from '@delon/chart/pie';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { timer } from 'rxjs';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-pie
      #pie
      [hasLegend]="true"
      title="销售额"
      subTitle="销售额"
      [total]="total()"
      [valueFormat]="format"
      [data]="salesPieData()"
      height="294"
      repaint="false"
      (clickItem)="handleClick($event)"
    />
  `,
  imports: [NzButtonModule, G2PieModule]
})
export class DemoComponent {
  readonly pie = viewChild<G2PieComponent>('pie');
  readonly salesPieData = signal<G2PieData[]>([]);
  readonly total = signal('');

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 0, max: number = 5000): number => Math.floor(Math.random() * (max - min + 1) + min);
    const salesPieData: G2PieData[] = [
      {
        x: '家用电器',
        y: rv()
      },
      {
        x: '食用酒水',
        y: rv()
      },
      {
        x: '个护健康',
        y: rv()
      },
      {
        x: '服饰箱包',
        y: rv()
      },
      {
        x: '母婴产品',
        y: rv()
      }
    ];
    if (Math.random() > 0.5) {
      salesPieData.push({
        x: '其他',
        y: rv()
      });
    }
    this.salesPieData.set(salesPieData);
    this.total.set(`&yen ${salesPieData.reduce((pre, now) => now.y + pre, 0).toFixed(2)}`);
    const pie = this.pie();
    if (pie) {
      // 等待组件完成本次渲染后再手动更新数据
      timer(0).subscribe(() => pie.changeData());
    }
  }

  format(val: number): string {
    return `&yen ${val.toFixed(2)}`;
  }

  handleClick(data: G2PieClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }
}
```
