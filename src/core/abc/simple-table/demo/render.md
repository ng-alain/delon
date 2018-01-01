---
order: 6
title: 自定义列
---

利用在 `ng-template` 定义 `st-row="custom"` 指定的名称，与列描述中的 `render: 'custom'` 关联；允许接收 `item`、`index`、`column` 三个值。

```ts
import { Component } from '@angular/core';
import { SimpleTableColumn, SimpleTableChange, SimpleTableFilter } from '@delon/abc';

@Component({
    selector: 'app-demo',
    template: `
    <simple-table [data]="users" [ps]="3" [columns]="columns">
        <ng-template st-row="custom" let-item let-index="index">
            <nz-tooltip [nzTitle]="'年龄：' + item.age">
                <span nz-tooltip>{{item.age}}-{{index}}</span>
            </nz-tooltip>
        </ng-template>
    </simple-table>
    `
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
        { title: '编号', index: 'id' },
        {
            title: '姓名', index: 'name',
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: '年龄', index: 'age',
            sorter: (a, b) => a.age - b.age,
            filters: [ { text: '20岁以下', value: [0, 20] }, { text: '20-25岁', value: [ 20, 25] }, { text: '25岁以上', value: [ 25, 100] } ],
            filterMultiple: false,
            filter: (filter: SimpleTableFilter, record: any) => record.age >= filter.value[0] && record.age <= filter.value[1]
        },
        {
            title: '自定义',
            render: 'custom'
        }
    ];
}
```
