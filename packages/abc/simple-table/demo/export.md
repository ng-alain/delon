---
order: 8
title: 导出Excel
---

将表格数据保存为 Excel。

```ts
import { Component } from '@angular/core';
import { SimpleTableColumn } from '@delon/abc';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="st.export()">Export</button>
    <button nz-button (click)="st.export('https://randomuser.me/api/?results=100', { filename: 'via-url.xlsx', sheetname: 'user' })">Export via url</button>
    <button nz-button (click)="st.export(exportData, { filename: 'via-data.xlsx', sheetname: 'user' })">Export via data</button>
    <simple-table #st [data]="url" [extraParams]="params" [total]="total" [columns]="columns"
                [resReName]="{list: 'results' }" class="mt-sm"></simple-table>
    `,
})
export class DemoComponent {
  url = `https://randomuser.me/api/?results=3`;
  params = { a: 1, b: 2 };
  // mock
  total = 100;
  columns: SimpleTableColumn[] = [
    { title: '编号', index: 'id.value' },
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
    { title: '注册时间', type: 'date', index: 'registered.date' },
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
