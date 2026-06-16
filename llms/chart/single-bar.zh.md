---
title: g2-single-bar
subtitle: 单一柱状图
cols: 1
type: G2
module: import { G2SingleBarModule } from '@delon/chart/single-bar';
---

单一柱状图更适合在列表中展示简单的区间数据，简洁的表现方式可以很好的减少大数据量的视觉展现压力。

## API

### g2-single-bar

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[repaint]` | 数据再次变更时是否重绘 | `boolean` | `true` |
| `[delay]` | 延迟渲染，单位：毫秒 | `number` | `0` |
| `[plusColor]` | 图表颜色 | `string` | `#40a9ff` |
| `[minusColor]` | 负值图表颜色 | `string` | `#ff4d4f` |
| `[height]` | 图表高度 | `number` | `60` |
| `[barSize]` | 柱状高度 | `number` | `30` |
| `[min]` | 最小值 | `number` | `0` |
| `[max]` | 最大值，若小于0表示显示负值 | `number` | `100` |
| `[padding]` | 图表内部间距 | `any` | `0` |
| `[value]` | 值 | `number` | `0` |
| `[format]` | 显示值格式 | `(value: number) => string` | - |
| `[textStyle]` | 显示值样式 | `any` | `{ fontSize: 12, color: '#595959' }` |
| `[theme]` | 定制图表主题 | `string | LooseObject` | - |
| `(ready)` | 当G2完成初始化后调用 | `EventEmitter<Chart>` | - |

---

## 代码示例

### 基础

基础用法。

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

import { G2SingleBarModule } from '@delon/chart/single-bar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'chart-single-bar-basic',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <nz-table [nzData]="list" [nzShowPagination]="false">
      <thead>
        <tr>
          <th>序号</th>
          <th nzWidth="350px">服务调用次数</th>
          <th nzWidth="350px">数据有负值</th>
        </tr>
      </thead>
      <tbody>
        @for (i of list; track $index) {
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
  list: Array<{ id: number; value: number; other: number }> = new Array(5).fill({}).map(() => ({
    id: Math.floor(Math.random() * 10000),
    value: Math.floor(Math.random() * 100),
    other: Math.floor(Math.random() * 100) > 50 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100)
  }));

  refresh(): void {
    this.list.forEach(v => {
      v.value = Math.floor(Math.random() * 100);
      v.other =
        Math.floor(Math.random() * 100) > 50 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100);
    });
  }
}
```
