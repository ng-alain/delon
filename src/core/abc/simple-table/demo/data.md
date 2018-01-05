---
order: 2
title: 自定义数据
---

利用 `data` 属性由外部传递数据。

```ts
import { Component, OnInit } from '@angular/core';
import { SimpleTableColumn, SimpleTableChange, SimpleTableFilter } from '@delon/abc';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'app-demo',
    template: `<simple-table [data]="users" [ps]="3" [columns]="columns"
                (checkboxChange)="checkboxChange($event)" (sortChange)="sortChange($event)"
                pagePlacement="center" toTopInChange
                showSizeChanger showQuickJumper showTotal isPageIndexReset></simple-table>`
})
export class DemoComponent implements OnInit {
    users: any[] = [];
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id', type: 'checkbox', selections: [
            {
                text: '小于25岁',
                select: (data: any[]) => data.forEach(item => item.checked = item.age < 25)
            },
            {
                text: '大于25岁',
                select: (data: any[]) => data.forEach(item => item.checked = item.age >= 25)
            }
        ] },
        {
            title: '姓名', index: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            filters: [ { text: 'name 1', value: 'name 1' }, { text: 'name 2', value: 'name 2' } ],
            filter: (filter: SimpleTableFilter, record: any) => record.name.indexOf(filter.value) === 0
        },
        {
            title: '年龄', index: 'age',
            sorter: (a, b) => a.age - b.age,
            filters: [ { text: '20岁以下', value: [0, 20] }, { text: '20-25岁', value: [ 20, 25] }, { text: '25岁以上', value: [ 25, 100] } ],
            filterMultiple: false,
            filter: (filter: SimpleTableFilter, record: any) => record.age >= filter.value[0] && record.age <= filter.value[1]
        }
    ];
    checkboxChange(ret: any) {
        console.log('checkboxChange', ret);
    }
    sortChange(ret: any) {
        console.log('sortChange', ret);
    }
    ngOnInit(): void {
        of(Array(100).fill({}).map((item: any, idx: number) => {
            return {
                id: idx + 1,
                name: `name ${idx + 1}`,
                age: Math.ceil(Math.random() * 10) + 20
            };
        })).pipe(delay(500)).subscribe(res => this.users = res);
    }
}
```
