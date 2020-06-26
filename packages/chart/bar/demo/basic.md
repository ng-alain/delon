---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

通过设置 `x`，`y` 属性，可以快速的构建出一个漂亮的柱状图，各种纬度的关系则是通过自定义的数据展现。

```ts
import { Component } from '@angular/core';
import { G2BarClickItem, G2BarData } from '@delon/chart/bar';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `<g2-bar height="200" [title]="'销售额趋势'" [data]="salesData" (clickItem)="handleClick($event)"></g2-bar>`,
})
export class DemoComponent {
  constructor(private msg: NzMessageService) {}

  salesData: G2BarData[] = new Array(12).fill({}).map((_i, idx) => ({
    x: `${idx + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
    color: idx > 5 ? '#f50' : undefined,
  }));

  handleClick(data: G2BarClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }
}
```
