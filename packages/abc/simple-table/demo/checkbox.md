---
order: 3
title: 可选择
---

利用 `checkboxChange` 监听所选的数据清单。

```ts
import { Component } from '@angular/core';
import { SimpleTableColumn, SimpleTableData } from '@delon/abc';

@Component({
    selector: 'app-demo',
    template: `<simple-table [data]="url" [extraParams]="params" [total]="total" [columns]="columns"
                [preDataChange]="dataChange" [resReName]="{list: 'results' }"
                (checkboxChange)="checkboxChange($event)"></simple-table>`
})
export class DemoComponent {
    url = `https://randomuser.me/api/?results=3`;
    params = { a: 1, b: 2 };
    total = 100;
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id.value', type: 'checkbox' },
        { title: '头像', type: 'img', width: '50px', index: 'picture.thumbnail' },
        { title: '邮箱', index: 'email' },
        { title: '电话', index: 'phone' },
        { title: '注册时间', type: 'date', index: 'registered' }
    ];
    checkboxChange(list: any[]) {
        console.log('checkboxChange', list);
    }
    dataChange(data: SimpleTableData[]) {
        return data.map((i: SimpleTableData, index: number) => {
            i.disabled = index === 0;
            return i;
        });
    }
}
```
