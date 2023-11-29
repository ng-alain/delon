---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
type: example
---

## zh-CN

利用 [nz-resizable](https://ng.ant.design/experimental/resizable/zh) 构建一个可调整尺寸的容器。

## en-US

Use [nz-resizable](https://ng.ant.design/experimental/resizable/en) to build a resizable container.

```ts
import { Component, ViewChild, inject } from '@angular/core';

import { G2BarClickItem, G2BarComponent, G2BarData, G2BarModule } from '@delon/chart/bar';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzResizableModule, NzResizeEvent } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'app-demo',
  template: ` <div
    nz-resizable
    [nzMinWidth]="200"
    [nzMaxHeight]="height"
    [nzMinHeight]="80"
    [style.width.px]="width"
    (nzResize)="onResize($event)"
    style="background: #eee;border: 1px solid #ddd; padding: 16px;"
  >
    <nz-resize-handles />
    <g2-bar #bar [height]="height" [title]="'销售额趋势'" [data]="salesData" (clickItem)="handleClick($event)" />
  </div>`,
  standalone: true,
  imports: [NzResizableModule, G2BarModule]
})
export class DemoComponent {
  private msg = inject(NzMessageService);
  @ViewChild('bar') private readonly barComp!: G2BarComponent;
  width = 400;
  height = 200;
  private id = -1;

  salesData: G2BarData[] = new Array(12).fill({}).map((_i, idx) => ({
    x: `${idx + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
    color: idx > 5 ? '#f50' : undefined
  }));

  handleClick(data: G2BarClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }

  onResize({ width }: NzResizeEvent): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.width = width!;
      this.barComp.chart.forceFit();
    });
  }
}
```
