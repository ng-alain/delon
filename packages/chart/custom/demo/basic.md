---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN

基于 G2 v5 的官方[漏斗图示例](https://g2.antv.antgroup.com/examples/general/funnel)改写，演示在 `g2-custom` 中直接使用原生 v5 `Chart`。

## en-US

Based on the official G2 v5 [funnel example](https://g2.antv.antgroup.com/examples/general/funnel), showing how to use a raw v5 `Chart` inside `g2-custom`.

```ts
import { Component, ElementRef, NgZone, inject } from '@angular/core';

import type { G2Spec } from '@antv/g2';

import { G2CustomModule } from '@delon/chart/custom';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'chart-custom-basic',
  template: ` <g2-custom delay="100" (render)="render($event)" /> `,
  imports: [G2CustomModule]
})
export class DemoComponent {
  private readonly ngZone = inject(NgZone);

  render(el: ElementRef<HTMLDivElement>): void {
    // v5 的 `render()` 返回 Promise，用 `void` 明确忽略（不再需要手动 detectChanges）
    this.ngZone.runOutsideAngular(() => void this.init(el.nativeElement));
  }

  private async init(el: HTMLElement): Promise<void> {
    const data = [
      { action: '浏览网站', pv: 50000 },
      { action: '放入购物车', pv: 35000 },
      { action: '生成订单', pv: 25000 },
      { action: '支付订单', pv: 15000 },
      { action: '完成交易', pv: 8000 }
    ].map(row => ({ ...row, percent: row.pv / 50000 }));

    const chart = new (window as NzSafeAny).G2.Chart({
      container: el,
      autoFit: true,
      height: 500,
      paddingTop: 20,
      paddingRight: 120,
      paddingBottom: 95
    });

    chart.options({
      type: 'interval',
      data,
      // v5 里 transpose 是**坐标变换**，必须放在 `coordinate.transform`
      // （写成 `coordinate: { type: 'transpose' }` 会在渲染时抛错）
      coordinate: { transform: [{ type: 'transpose' }] },
      transform: [{ type: 'symmetryY' }],
      axis: false,
      legend: false,
      encode: { x: 'action', y: 'pv', color: 'action', shape: 'funnel' },
      scale: {
        x: { padding: 0 },
        color: { range: ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'] }
      },
      animate: { enter: { type: 'fadeIn' } },
      interaction: { elementHighlight: true },
      tooltip: {
        title: false,
        items: [
          (d: { action: string; pv: number; percent: number }) => ({
            name: d.action,
            value: `浏览人数：${d.pv} / 占比：${+(d.percent * 100).toFixed(2)}%`
          })
        ]
      },
      labels: [
        {
          text: (d: { action: string; pv: number }) => `${d.action} ${d.pv}`,
          position: 'inside',
          transform: [{ type: 'contrastReverse' }]
        },
        {
          text: (d: { percent: number }) => `${+(d.percent * 100).toFixed(2)}%`,
          position: 'inside',
          dy: 18,
          transform: [{ type: 'contrastReverse' }]
        }
      ]
    } as G2Spec);

    await chart.render();
  }
}
```
