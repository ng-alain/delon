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

- [G2 文档](https://g2.antv.antgroup.com/)
- [G2 示例](https://g2.antv.antgroup.com/examples)

## API

### g2-custom

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[height]` | 高 | `number` | - |
| `[resizeTime]` | resize 事件去抖时长（`0` 表示关闭 resize 监听） | `number` | `0` |
| `(render)` | 渲染事件 | `output<ElementRef>` | - |
| `(resize)` | resize 事件 | `output<ElementRef>` | - |
| `(destroy)` | 销毁事件（**当前版本不会触发，为兼容保留**） | `output<ElementRef>` | - |
| `(ready)` | 当G2完成初始化后调用 | `output<Chart>` | - |
| `(error)` | 当渲染失败时调用（G2 未加载或渲染抛错），此时 `(ready)` 不会触发 | `output<unknown>` | - |
| `[theme]` | 定制图表主题 | `string \| LooseObject` | - |

---

## 代码示例

### 基础

基于 G2 v5 的官方[漏斗图示例](https://g2.antv.antgroup.com/examples/general/funnel)改写，演示在 `g2-custom` 中直接使用原生 v5 `Chart`。

```typescript
import { Component, ElementRef, NgZone, inject } from '@angular/core';

import type { G2Spec } from '@antv/g2';

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
