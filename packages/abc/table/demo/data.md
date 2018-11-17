---
order: 2
title:
  zh-CN: 自定义数据
  en-US: Custom Data
---

## zh-CN

`data` 属性支持 `STData[]`、`Observable<STData[]>` 数据类型。

## en-US

`data` property supports `STData[]`、`Observable<STData[]>` data types.

```ts
import { Component, OnInit } from '@angular/core';
import { STColumn, STChange } from '@delon/abc';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  template: `
  <div class="mb-md">
    <button (click)="st.clear()" nz-button>Clear Data</button>
    <button (click)="st.clearStatus()" nz-button>Clear Status</button>
  </div>
  <st #st [data]="users" [columns]="columns" (change)="change($event)"></st>`,
})
export class DemoComponent implements OnInit {
  users: any[] = [];
  columns: STColumn[] = [
    {
      title: '编号',
      index: 'id',
      type: 'checkbox',
      selections: [
        {
          text: '小于25岁',
          select: (data: any[]) =>
            data.forEach(item => (item.checked = item.age < 25)),
        },
        {
          text: '大于25岁',
          select: (data: any[]) =>
            data.forEach(item => (item.checked = item.age >= 25)),
        },
      ],
    },
    {
      title: '姓名',
      index: 'name',
      sort: {
        compare: (a, b) => a.name.length - b.name.length,
      },
      filter: {
        menus: [
          { text: 'name 1', value: 'name 1' },
          { text: 'name 2', value: 'name 2' },
        ],
        fn: (filter: any, record: any) =>
          record.name.indexOf(filter.value) === 0,
      },
    },
    {
      title: '年龄',
      index: 'age',
      sort: {
        compare: (a, b) => a.age - b.age,
      },
      filter: {
        menus: [
          { text: '20岁以下', value: [0, 20] },
          { text: '20-25岁', value: [20, 25] },
          { text: '25岁以上', value: [25, 100] },
        ],
        fn: (filter: any, record: any) =>
          record.age >= filter.value[0] && record.age <= filter.value[1],
        multiple: false,
      },
    },
    {
      title: '状态',
      type: 'badge',
      index: 'status',
      badge: {
        1: { text: 'Success', color: 'success' },
        2: { text: 'Error', color: 'error' },
        3: { text: 'Processing', color: 'processing' },
        4: { text: 'Default', color: 'default' },
        5: { text: 'Warning', color: 'warning' },
      },
    },
  ];

  ngOnInit(): void {
    of(
      Array(100)
        .fill({})
        .map((item: any, idx: number) => {
          return {
            id: idx + 1,
            name: `name ${idx + 1}`,
            age: Math.ceil(Math.random() * 10) + 20,
            status: Math.floor(Math.random() * 5) + 1,
          };
        }),
    )
      .pipe(delay(500))
      .subscribe(res => (this.users = res));
  }

  change(e: STChange) {
    console.log(e);
  }
}
```
