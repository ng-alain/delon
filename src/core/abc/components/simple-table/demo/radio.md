---
order: 4
title: 单选框
---

利用 `radioChange` 监听所选的数据清单。

```ts
import { Component } from '@angular/core';
import { SimpleTableColumn, SimpleTableChange, SimpleTableFilter } from '@delon/abc';

@Component({
    selector: 'app-demo',
    template: `<simple-table [data]="users" [ps]="3" [columns]="columns"
                (radioChange)="radioChange($event)"></simple-table>`
})
export class DemoComponent {
    users: any[] = Array(10).fill({}).map((item: any, idx: number) => {
        return {
            id: idx + 1,
            name: `name ${idx + 1}`,
            age: Math.ceil(Math.random() * 10) + 20
        };
    });
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id', type: 'radio' },
        { title: '姓名', index: 'name' },
        { title: '年龄', index: 'age' }
    ];
    radioChange(ret: any) {
        console.log('radioChange', ret);
    }
}
```
