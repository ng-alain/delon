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
import { Component, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="st.export()">Export</button>
    <button nz-button (click)="st.export(true)">Export Filtered Data</button>
    <button nz-button (click)="st.export(data, { filename: 'via-data.xlsx', sheetname: 'user' })">Export via data</button>
    <st #st [data]="data" [columns]="columns" class="mt-sm"></st>
  `,
})
export class DemoComponent {
  @ViewChild('st', { static: false }) st: STComponent;
  data: any[] = Array(10000)
    .fill({})
    .map((_item: any, index: number) => {
      return {
        id: index + 1,
        picture: {
          thumbnail: `https://randomuser.me/api/portraits/thumb/women/${Math.min(index + 1, 30)}.jpg`,
        },
        email: `e${index + 1}@qq.com`,
        phone: `phone - ${index + 1}`,
        price: Math.ceil(Math.random() * 10000000) + 10000000,
        registered: new Date(),
      };
    });
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    {
      title: '头像',
      type: 'img',
      width: 60,
      index: 'picture.thumbnail',
      exported: false,
    },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    {
      title: '数字',
      index: 'price',
      type: 'number',
      sort: {
        compare: (a, b) => a.price - b.price,
      },
    },
    { title: '货币', index: 'price', type: 'currency' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];
}
```
