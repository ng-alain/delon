---
order: 1
title: 基础
---

快速生成表格；利用 `resReName` 可以适配后端数据格式。

```ts
import { Component } from '@angular/core';
import { SimpleTableColumn } from '@delon/abc';

@Component({
    selector: 'app-demo',
    template: `<simple-table [data]="url" [extraParams]="params" [total]="total" [columns]="columns"
                [resReName]="{list: 'results' }"></simple-table>`
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
