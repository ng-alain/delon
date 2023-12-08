---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

通过设置 `x`，`y` 属性，可以快速的构建出一个漂亮的柱状图，各种纬度的关系则是通过自定义的数据展现。

```ts
import { Component, inject } from '@angular/core';

import { G2BarClickItem, G2BarData, G2BarModule } from '@delon/chart/bar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-bar height="200" [title]="'销售额趋势'" [data]="salesData" (clickItem)="handleClick($event)" />
  `,
  standalone: true,
  imports: [NzButtonModule, G2BarModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);

  salesData = this.genData();

  private genData(): G2BarData[] {
    return new Array(12).fill({}).map((_i, idx) => ({
      x: `${idx + 1}月`,
      y: Math.floor(Math.random() * 1000) + 200,
      color: idx > 5 ? '#f50' : undefined
    }));
  }

  refresh(): void {
    this.salesData = this.genData();
  }

  handleClick(data: G2BarClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }
}
```
