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
    <button nz-button (click)="st.export('https://randomuser.me/api/?results=100', { filename: '所有页.xlsx', sheetname: 'user' })">Export All Page</button>
    <simple-table #st [url]="url" [extraParams]="params" [total]="total" [columns]="columns"
                [resReName]="{list: 'results' }" class="mt-sm"></simple-table>
    `
})
export class DemoComponent {
    url = `https://randomuser.me/api/?results=3`;
    params = { a: 1, b: 2 };
    // mock
    total = 100;
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id.value' },
        { title: '头像', type: 'img', width: '50px', index: 'picture.thumbnail' },
        { title: '邮箱', index: 'email' },
        { title: '电话', index: 'phone' },
        { title: '注册时间', type: 'date', index: 'registered' }
    ];
}
```
