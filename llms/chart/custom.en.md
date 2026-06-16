---
title: g2-chart
subtitle: Custom Chart
cols: 1
type: G2
module: import { G2CustomModule } from '@delon/chart/custom';
---

Use `g2-custom` component to package your G2 chart.

## How to use

A simple example template:

```ts
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <g2-custom (render)="render($event)"></g2-custom>
  `,
})
export class DemoComponent {
  render(el: ElementRef) {
    // Coding G2 code
  }
}
```

### How to develop G2

If throw error `G2` not found, please refer to [Frequently Asked Questions](/chart/faq).

## Links

- [G2 Document](https://www.yuque.com/antv/g2-docs-en)
- [G2 Demo](https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html)

## API

### g2-custom

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[height]` | Height of chart container | `number` | - |
| `[resizeTime]` | Resize event debounce time | `number` | `200` |
| `(render)` | Render event | `EventEmitter<ElementRef>` | - |
| `(resize)` | Resize event | `EventEmitter<ElementRef>` | - |
| `(destroy)` | Destroy event | `EventEmitter<ElementRef>` | - |
| `[theme]` | Custom chart theme | `string | LooseObject` | - |

---

## Examples

### Basic

Copy [Basic Funnel Chart](https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html)。

```typescript
import { Component, ElementRef, NgZone, inject } from '@angular/core';

import type { Chart } from '@antv/g2';

import { G2CustomModule } from '@delon/chart/custom';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'chart-custom-basic',
  template: ` <g2-custom delay="100" (render)="render($event)" /> `,
  imports: [G2CustomModule]
})
export class ChartCustomBasic {
  private readonly ngZone = inject(NgZone);

  render(el: ElementRef<HTMLDivElement>): void {
    this.ngZone.runOutsideAngular(() => this.init(el.nativeElement));
  }

  private init(el: HTMLElement): void {
    const data: Array<{ action: string; pv: number; percent: number }> = [
      { action: '浏览网站', pv: 50000, percent: 0 },
      { action: '放入购物车', pv: 35000, percent: 0 },
      { action: '生成订单', pv: 25000, percent: 0 },
      { action: '支付订单', pv: 15000, percent: 0 },
      { action: '完成交易', pv: 8000, percent: 0 }
    ].map(row => {
      row.percent = row.pv / 50000;
      return row;
    });
    const chart: Chart = new (window as NzSafeAny).G2.Chart({
      container: el,
      autoFit: true,
      height: 500,
      width: el.clientWidth,
      padding: [20, 120, 95]
    });
    chart.data(data);
    chart.axis(false);
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
      itemTpl:
        '<li style="margin-bottom:4px;list-style-type:none;padding: 0;">' +
        '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
        '{name}<br/>' +
        '<span style="padding-left: 16px;line-height: 16px;">浏览人数：{pv}</span><br/>' +
        '<span style="padding-left: 16px;line-height: 16px;">占比：{percent}</span><br/>' +
        '</li>'
    });

    chart.coordinate('rect').transpose().scale(1, -1);
    chart
      .interval()
      .adjust('symmetric')
      .position('action*percent')
      .shape('funnel')
      .color('action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'])
      .label(
        'action*pv',
        (action, pv) => {
          return {
            content: `${action} ${pv}`
          };
        },
        {
          offset: 35,
          labelLine: {
            style: {
              lineWidth: 1,
              stroke: 'rgba(0, 0, 0, 0.15)'
            }
          }
        }
      )
      .tooltip('action*pv*percent', (action, pv, percent) => {
        return {
          name: action,
          percent: `${+percent * 100}%`,
          pv
        };
      })
      .animate({
        appear: {
          animation: 'fade-in'
        },
        update: {
          // annotation: 'fade-in'
        }
      });

    chart.interaction('element-active');

    chart.on('beforepaint', () => {
      chart.annotation().clear(true);
      const chartData = chart.getData();
      // 中间标签文本
      chartData.forEach(obj => {
        chart.annotation().text({
          top: true,
          position: {
            action: obj.action,
            percent: 'median'
          },
          content: `${+obj.percent * 100}%`, // 显示的文本内容
          style: {
            stroke: null,
            fill: '#fff',
            textAlign: 'center'
          }
        });
      });
    });

    chart.render();
  }
}
```
