---
title: g2-chart
subtitle: 自定义图表
cols: 1
type: G2
module: import { G2CustomModule } from '@delon/chart/custom';
---

使用 `g2-custom` 组件可以更快速的封装自己的图表组件。

## 如何使用

一个简单示例模板：

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
    // 开始编写 G2 代码
  }
}
```

### 如何开发 G2

可能你会遇到未找到 `G2`，请参考[常见问题](/chart/faq)。

## 链接

- [G2 文档](https://www.yuque.com/antv/g2-docs)
- [G2 示例](https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html)

## API

### g2-custom

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[height]` | 高 | `number` | - |
| `[resizeTime]` | resize 事件去抖时长 | `number` | `200` |
| `(render)` | 渲染事件 | `EventEmitter<ElementRef>` | - |
| `(resize)` | resize 事件 | `EventEmitter<ElementRef>` | - |
| `(destroy)` | 销毁事件 | `EventEmitter<ElementRef>` | - |
| `[theme]` | 定制图表主题 | `string | LooseObject` | - |

---

## 代码示例

### 基础

模仿自 [antv基础漏斗图](https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html)。

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
