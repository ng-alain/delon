---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN

模仿自 [antv基础漏斗图](https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html)。

## en-US

Copy [Basic Funnel Chart](https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html)。

```ts
import { Component, ElementRef, NgZone } from '@angular/core';

import type { Chart } from '@antv/g2';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'chart-custom-basic',
  template: `<g2-custom delay="100" (render)="render($event)" />`
})
export class DemoComponent {
  constructor(private ngZone: NgZone) {}

  render(el: ElementRef<HTMLDivElement>): void {
    this.ngZone.runOutsideAngular(() => this.init(el.nativeElement));
  }

  private init(el: HTMLElement): void {
    const data: Array<{ action: string; pv: number }> = [
      { action: '浏览网站', pv: 50000 },
      { action: '放入购物车', pv: 35000 },
      { action: '生成订单', pv: 25000 },
      { action: '支付订单', pv: 15000 },
      { action: '完成交易', pv: 8000 }
    ];

    const chart: Chart = new (window as NzSafeAny).G2.Chart({
      container: el,
      autoFit: true
    });
    chart.coordinate({
      transform: [{ type: 'transpose' }]
    });
    chart.data(data);

    chart
      .interval()
      .encode('x', 'action')
      .encode('y', 'pv')
      .encode('color', 'action')
      .encode('shape', 'funnel')
      .transform({ type: 'symmetryY' })
      .scale('x', { padding: 0 })
      .animate('enter', { type: 'fadeIn' })
      .label({
        text: (d: { action: string; pv: number }) => `${d.action}\n${d.pv}`,
        position: 'inside',
        transform: [{ type: 'contrastReverse' }]
      })
      .axis(false);

    chart.render();
  }
}
```
