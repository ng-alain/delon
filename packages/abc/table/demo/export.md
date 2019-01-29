---
order: 20
title:
  zh-CN: 导出Excel
  en-US: Export Excel
---

## zh-CN

将表格数据保存为 Excel。

## en-US

Save the table data as Excel.

```ts
import { Component } from '@angular/core';
import { STColumn } from '@delon/abc';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="st.export()">Export</button>
    <button nz-button (click)="st.export(exportData, { filename: 'via-data.xlsx', sheetname: 'user' })">Export via data</button>
    <st #st [data]="url" [req]="{params: params}" [columns]="columns" class="mt-sm"></st>
    `,
})
export class DemoComponent {
  url = `/users?total=100`;
  params = { a: 1, b: 2 };
  // mock
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    {
      title: '头像',
      type: 'img',
      width: '50px',
      index: 'picture.thumbnail',
      exported: false,
    },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '数字', index: 'price', type: 'number' },
    { title: '货币', index: 'price', type: 'currency' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];
  // mock export data
  exportData: any[] = Array(10000)
    .fill({})
    .map((item: any, index: number) => {
      return {
        id: { value: index + 1 },
        picture: {
          thumbnail: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==`,
        },
        email: `e${index + 1}@qq.com`,
        phone: `phone - ${index + 1}`,
        price: Math.ceil(Math.random() * 10000000) + 10000000,
        registered: new Date(),
      };
    });
}
```
