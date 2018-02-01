---
order: 5
title: 后端筛选和排序
---

快速生成表格；利用 `resReName` 可以适配后端数据格式。

```ts
import { Component } from '@angular/core';
import { SimpleTableColumn, SimpleTableFilter } from '@delon/abc';

@Component({
    selector: 'app-demo',
    template: `<simple-table [data]="url" [extraParams]="params" [total]="total" [columns]="columns"
                [resReName]="{list: 'results' }"
                multiSort></simple-table>`
})
export class DemoComponent {
    url = `https://randomuser.me/api/?results=3`;
    params = { a: 1, b: 2 };
    total = 100;
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id.value' },
        { title: '头像', type: 'img', width: '50px', index: 'picture.thumbnail' },
        {
            title: '姓名', index: 'name.last',
            format: (item: any) => `${item.name.last} ${item.name.first}`,
            sorter: (a, b) => true
        },
        {
            title: '国家', index: 'nat',
            filters: [ { text: '中国', value: 'CH' }, { text: '美国', value: 'US' }, { text: '德国', value: 'DE' } ],
            filter: () => true,
            sorter: (a, b) => true
        },
        {
            title: '性别', index: 'gender',
            filters: [ { text: 'male', value: 'male' }, { text: 'female', value: 'female' } ],
            filterMultiple: false,
            filter: () => true,
            sorter: (a, b) => true
        },
        { title: '注册时间', type: 'date', index: 'registered' }
    ];
}
```
