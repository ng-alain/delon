---
order: 2
title:
  zh-CN: 导出
  en-US: Export
---

## zh-CN

导出Excel并自动弹出保存对话框。

## en-US

Export Excel and automatically pop save dialog.

```ts
import { Component } from '@angular/core';

import { STColumn, STData } from '@delon/abc/st';
import { XlsxService } from '@delon/abc/xlsx';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="download('xlsx')">Export Xlsx</button>
    <button nz-button (click)="download('csv')">Export Csv</button>
    <st [data]="users" [ps]="3" [columns]="columns" class="mt-sm"></st>
  `
})
export class DemoComponent {
  constructor(private xlsx: XlsxService) {}

  users: STData[] = Array(100)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      name: `name ${idx + 1}`,
      age: Math.ceil(Math.random() * 10) + 20
    }));
  columns: STColumn[] = [
    { title: '编号', index: 'id', type: 'checkbox' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age' }
  ];

  download(format: 'xlsx' | 'csv'): void {
    const data = [this.columns.map(i => i.title)];
    this.users.forEach(i => data.push(this.columns.map(c => i[c.index as string])));
    this.xlsx.export({
      sheets: [
        {
          data,
          name: 'sheet name'
        }
      ],
      format
    });
  }
}
```
