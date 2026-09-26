---
title: g2-pie
subtitle: Pie
cols: 1
type: G2
module: import { G2PieModule } from '@delon/chart/pie';
---

It is ideal for displaying speed-related graphics.

## API

### g2-pie

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[animate]` | Whether to display the animation | `boolean` | `true` |
| `[color]` | Color of the chart | `string` | `rgba(24, 144, 255, 0.85)` |
| `[height]` | Height of the chart | `number` | - |
| `[fontSize]` | Base font size (the legend inherits it and the center value scales with `em`) | `number` | `14` |
| `[hasLegend]` | Whether to display the legend | `boolean` | `false` |
| `[padding]` | Padding of the chart | `number[]` | `[12, 0, 12, 0]` |
| `[percent]` | Percentage | `number` | - |
| `[select]` | Whether slice selection is supported (**not implemented in the current version, kept for compatibility and has no effect**) | `boolean` | `true` |
| `[lineWidth]` | Border width | `number` | `0` |
| `[inner]` | Radius of the inner polar coordinate | `number` | `0.75` |
| `[blockMaxWidth]` | Width at which the layout switches to block mode | `number` | `380` |
| `[tooltip]` | Whether to display the tooltip | `boolean` | `true` |
| `[subTitle]` | Subtitle of the chart | `string,TemplateRef<void>` | - |
| `[total]` | Total amount | `string,number,TemplateRef<void>` | - |
| `[valueFormat]` | Formatter for the y-axis value | `(y: number) => string` | - |
| `[data]` | Data | `G2PieData[]` | - |
| `[colors]` | Color list | `string[]` | - |
| `[interaction]` | Interaction type: `none` (no interaction), `element-active` (active element), `active-region` (chart component), `brush` (brush selection), `drag-move` (drag to move) | `InteractionType` | `none` |
| `[ratio]` | Percentage configuration | `G2PieRatio` | `{ text: '占比', inverse: '反比', color: '', inverseColor: '#F0F2F5' }` |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
| `(clickItem)` | Callback when clicking an item | `output<G2PieClickItem>` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |

### G2PieData

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[x]` | x-axis | `any` | - |
| `[y]` | y-axis | `number` | - |

---

## Examples

### Basic

Basic usage. By default, a smooth data update is detected only when `data` changes, so here `repaint` is used to manually call `changeData` and update the data to achieve the same smooth effect.

```typescript
import { Component, signal, viewChild } from '@angular/core';

import { G2PieClickItem, G2PieComponent, G2PieData, G2PieModule } from '@delon/chart/pie';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { timer } from 'rxjs';

@Component({
  selector: 'chart-pie-basic',
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
export class ChartPieBasic {
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

### Mini

By simplifying the `pie` options you can quickly build a minimal pie chart, and combine it with `chart-card` to cover more business scenarios.

```typescript
import { Component } from '@angular/core';

import { G2PieModule } from '@delon/chart/pie';

@Component({
  selector: 'chart-pie-mini',
  template: `<g2-pie percent="28" subTitle="中式快餐" total="28%" height="130" padding="auto" style="width: 130px" />`,
  imports: [G2PieModule]
})
export class ChartPieMini {}
```
