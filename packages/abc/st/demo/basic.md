---
order: 1
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

快速生成表格；利用 `res` 可以适配后端数据格式。

## en-US

Quickly generate tables; use `res` to adapted backend data format.

```ts
import { Component, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button nzType="primary" (click)="setRow()">setRow Method</button>
    <st #st [widthMode]="{ type: 'strict' }" [data]="url" [req]="{ params: params }" [columns]="columns"></st>
  `,
})
export class DemoComponent {
  url = `/users?total=2&field=list`;
  params = { a: 1, b: 2 };
  @ViewChild('st', { static: false }) private st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 80 },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email', width: 80 },
    { title: '电话', index: 'phone' },
    { title: { text: '佣金', optional: '（单位：元）', optionalHelp: '计算公式=订单金额 * 0.6%' }, index: 'price', type: 'currency' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];

  setRow(): void {
    this.st.setRow(0, { price: 100000000 });
  }
}
```
