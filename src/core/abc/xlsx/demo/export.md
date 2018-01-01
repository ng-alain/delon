---
order: 2
title: 导出
---

导出Excel并自动弹出保存对话框。

```ts
import { Component } from '@angular/core';
import { SimpleTableColumn, XlsxService } from '@delon/abc';

@Component({
    selector: 'app-demo',
    template: `
    <button nz-button (click)="download()">Export</button>
    <simple-table [data]="users" [ps]="3" [columns]="columns" class="mt-sm"></simple-table>
    `
})
export class DemoComponent {

    constructor(private xlsx: XlsxService) {}

    users: any[] = Array(100).fill({}).map((item: any, idx: number) => {
        return {
            id: idx + 1,
            name: `name ${idx + 1}`,
            age: Math.ceil(Math.random() * 10) + 20
        };
    });
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id', type: 'checkbox' },
        { title: '姓名', index: 'name' },
        { title: '年龄', index: 'age' }
    ];

    download() {
        const data = [ this.columns.map(i => i.title) ];
        this.users.forEach(i => data.push(this.columns.map(c => i[c.index as string])));
        this.xlsx.export({
            sheets: [
                {
                    data: data,
                    name: 'sheet name'
                }
            ]
        });
    }
}
```
