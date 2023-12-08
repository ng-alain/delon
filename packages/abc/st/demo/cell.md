---
order: 3
title:
  zh-CN: 单元格
  en-US: Cell
---

## zh-CN

使用 `cell` 组件更丰富的渲染。

## en-US

Use the `cell` component for richer rendering.

```ts
import { Component, ViewChild } from '@angular/core';

import type { CellOptions } from '@delon/abc/cell';
import { STColumn, STComponent, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button nzType="primary" (click)="setRow()">setRow Method</button>
    <st #st [widthMode]="{ type: 'strict' }" [data]="url" [req]="{ params: params }" [columns]="columns" />
  `,
  standalone: true,
  imports: [STModule, NzButtonModule]
})
export class DemoComponent {
  url = `/users?total=2&field=list`;
  params = { a: 1, b: 2 };
  @ViewChild('st', { static: false }) private st!: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 55 },
    { title: '类型', index: 'type', width: 60, cell: { enum: { 1: '普通', 2: '会员', 3: '管理' } } },
    { title: '头像', index: 'picture.thumbnail', width: 64, cell: { type: 'img' } },
    { title: '邮箱', index: 'email', width: 120 },
    { title: '电话', index: 'phone', cell: { mask: '999****9999' } },
    {
      title: { text: '佣金', optionalHelp: '计算公式=订单金额 * 0.6%' },
      index: 'price',
      cell: {
        type: 'currency',
        unit: '元'
      }
    },
    {
      title: '人民币写法',
      index: 'total',
      cell: {
        type: 'cny'
      }
    },
    {
      title: 'Site',
      index: 'website',
      width: 100,
      cell: record => {
        return {
          tooltip: record.website,
          link: {
            url: record.website
          }
        } as CellOptions;
      }
    },
    { title: '可用', index: 'disabled', width: 64, cell: { type: 'boolean' } },
    { title: '注册时间', index: 'registered', width: 180, cell: { type: 'date' } }
  ];

  setRow(): void {
    this.st.setRow(0, { price: 100000000 });
  }
}
```
