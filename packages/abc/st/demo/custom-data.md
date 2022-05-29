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
import { of, delay } from 'rxjs';

import { STChange, STColumn, STData } from '@delon/abc/st';
import { dateTimePickerUtil } from '@delon/util/date-time';

@Component({
  selector: 'app-demo',
  template: `
    <div class="mb-md">
      <button (click)="st.clear()" nz-button>Clear Data</button>
      <button (click)="st.reload()" nz-button>Reload Data</button>
      <button (click)="st.clearStatus(); st.reload()" nz-button>Clear Status</button>
      <button (click)="st.setRow(0, { className: 'text-success' })" nz-button>Update Row ClassName</button>
    </div>
    <st #st [data]="users" [columns]="columns" (change)="change($event)"></st>
  `
})
export class DemoComponent implements OnInit {
  users: STData[] = [];
  columns: STColumn[] = [
    {
      title: '编号',
      index: 'id',
      type: 'checkbox',
      selections: [
        {
          text: '小于25岁',
          select: data => data.forEach(item => (item.checked = item.age < 25))
        },
        {
          text: '大于25岁',
          select: data => data.forEach(item => (item.checked = item.age >= 25))
        }
      ]
    },
    {
      title: '姓名',
      index: 'name',
      sort: {
        compare: (a, b) => a.name.length - b.name.length
      },
      filter: {
        type: 'keyword',
        placeholder: '输入后按回车搜索',
        fn: (filter, record) => !filter.value || record.name.indexOf(filter.value) !== -1
      }
    },
    {
      title: '年龄',
      index: 'age',
      sort: {
        compare: (a, b) => a.age - b.age
      },
      filter: {
        type: 'number',
        placeholder: '范围 10 ~ 100 之间',
        number: {
          min: 10,
          max: 100
        },
        fn: (filter, record) => (filter.value != null ? record.age >= +filter.value : true)
      }
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
        5: { text: 'Warning', color: 'warning' }
      },
      filter: {
        menus: [
          { text: 'Success', value: 1 },
          { text: 'Error', value: 2 }
        ],
        fn: (filter, record) => record.age >= filter.value[0] && record.age <= filter.value[1],
        multiple: true
      }
    },
    {
      title: 'Date',
      index: 'created',
      type: 'date',
      filter: {
        type: 'date',
        date: {
          mode: 'date',
          showToday: false,
          disabledDate: dateTimePickerUtil.disabledAfterDate()
        },
        fn: () => true
      }
    }
  ];

  ngOnInit(): void {
    const data = Array(100)
      .fill({})
      .map((_, idx) => ({
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
        status: Math.floor(Math.random() * 5) + 1,
        created: new Date()
      }));
    of(data)
      .pipe(delay(500))
      .subscribe(res => (this.users = res));
  }

  change(e: STChange): void {
    console.log(e);
  }
}
```
