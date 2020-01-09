---
order: 8
title:
  en-US: Grouping table head
  zh-CN: 表头分组
---

## zh-CN

`columns[n]` 可以内嵌 `children`，以渲染分组表头。

## en-US

Group table head with `columns[n].children`.

```ts
import { Component, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/table';

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
    { title: '编号', index: 'id' },
    {
      title: 'Other',
      children: [
        { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
        { title: '邮箱', index: 'email' },
      ],
    },
  ];

  setRow(): void {
    this.st.setRow(0, { price: 100000000 });
  }
}
```
