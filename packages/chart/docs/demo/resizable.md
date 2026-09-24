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
import { Component, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { G2BarClickItem, G2BarComponent, G2BarData, G2BarModule } from '@delon/chart/bar';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzResizableModule, NzResizeEvent } from 'ng-zorro-antd/resizable';
import { Subject, animationFrameScheduler, debounceTime } from 'rxjs';

@Component({
  selector: 'app-demo',
  template: ` <div
    nz-resizable
    [nzMinWidth]="200"
    [nzMaxHeight]="height()"
    [nzMinHeight]="80"
    [style.width.px]="width()"
    (nzResize)="onResize($event)"
    style="background: #eee;border: 1px solid #ddd; padding: 16px;"
  >
    <nz-resize-handles />
    <g2-bar #bar [height]="height()" [title]="'销售额趋势'" [data]="salesData()" (clickItem)="handleClick($event)" />
  </div>`,
  imports: [NzResizableModule, G2BarModule]
})
export class DemoComponent {
  private msg = inject(NzMessageService);
  readonly barComp = viewChild.required<G2BarComponent>('bar');
  readonly width = signal(400);
  readonly height = signal(200);
  private readonly resize$ = new Subject<number>();

  constructor() {
    this.resize$.pipe(debounceTime(0, animationFrameScheduler), takeUntilDestroyed()).subscribe(width => {
      this.width.set(width);
      this.barComp().chart.forceFit();
    });
  }

  readonly salesData = signal<G2BarData[]>(
    new Array(12).fill({}).map((_i, idx) => ({
      x: `${idx + 1}月`,
      y: Math.floor(Math.random() * 1000) + 200,
      color: idx > 5 ? '#f50' : undefined
    }))
  );

  handleClick(data: G2BarClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }

  onResize({ width }: NzResizeEvent): void {
    this.resize$.next(width!);
  }
}
```
