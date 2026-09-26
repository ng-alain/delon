---
title: g2-single-bar
subtitle: Single Bar
cols: 1
type: G2
module: import { G2SingleBarModule } from '@delon/chart/single-bar';
---

A single bar chart is better for displaying simple interval data in a list; its concise presentation greatly reduces the visual pressure of large amounts of data.

## API

### g2-single-bar

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[repaint]` | Whether to repaint when the data changes again | `boolean` | `true` |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` |
| `[plusColor]` | Color of the chart | `string` | `#40a9ff` |
| `[minusColor]` | Color of the chart for negative values | `string` | `#ff4d4f` |
| `[height]` | Height of the chart | `number` | `60` |
| `[barSize]` | Height of the bar | `number` | `30` |
| `[min]` | Minimum value | `number` | `0` |
| `[max]` | Maximum value; a value less than 0 means negative values are displayed | `number` | `100` |
| `[padding]` | Padding of the chart | `any` | `0` |
| `[line]` | Whether to display the middle line (the horizontal line at `(min + max) / 2`) | `boolean` | `false` |
| `[value]` | Value | `number` | `0` |
| `[format]` | Formatter of the displayed value | `(value: number) => string` | - |
| `[textStyle]` | Style of the displayed value | `any` | `{ fontSize: 12, color: '#595959' }` |
| `[theme]` | Custom chart theme | `string \| LooseObject` | - |
| `(ready)` | Callback when G2 is initialized | `output<Chart>` | - |
| `(error)` | Callback when rendering fails (G2 not loaded or render throws); `(ready)` will not fire | `output<unknown>` | - |

---

## Examples

### Basic

Basic usage.

```typescript
import { Component, ViewEncapsulation, signal } from '@angular/core';

import { G2SingleBarModule } from '@delon/chart/single-bar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'chart-single-bar-basic',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <nz-table [nzData]="list()" [nzShowPagination]="false">
      <thead>
        <tr>
          <th>序号</th>
          <th nzWidth="350px">服务调用次数</th>
          <th nzWidth="350px">数据有负值</th>
        </tr>
      </thead>
      <tbody>
        @for (i of list(); track $index) {
          <tr>
            <td>{{ $index + 1 }}</td>
            <td>
              <g2-single-bar height="24" [value]="i.value" />
            </td>
            <td>
              <g2-single-bar height="60" [value]="i.other" min="-100" line />
            </td>
          </tr>
        }
      </tbody>
    </nz-table>
  `,
  styles: [
    `
      :host ::ng-deep .ant-table tbody > tr > td {
        padding: 0;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated,
  imports: [NzButtonModule, NzTableModule, G2SingleBarModule]
})
export class ChartSingleBarBasic {
  readonly list = signal<Array<{ id: number; value: number; other: number }>>(
    new Array(5).fill({}).map(() => ({
      id: Math.floor(Math.random() * 10000),
      value: Math.floor(Math.random() * 100),
      other:
        Math.floor(Math.random() * 100) > 50 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100)
    }))
  );

  refresh(): void {
    this.list.update(list =>
      list.map(v => ({
        ...v,
        value: Math.floor(Math.random() * 100),
        other:
          Math.floor(Math.random() * 100) > 50 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100)
      }))
    );
  }
}
```
