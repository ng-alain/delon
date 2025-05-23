---
order: 5
title:
  zh-CN: 后端筛选和排序
  en-US: Backend filtering and sorting
---

## zh-CN

利用 `multiSort` 支持多字段排序。

## en-US

Using `multiSort` supported multi-field sorting.

```ts
import { Component } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

interface UserData extends STData {
  name: {
    last: string;
    first: string;
  };
}

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="st.reset()">重置</button>
    <st #st [data]="url" [req]="{ params: params }" [columns]="columns" multiSort />
  `,
  imports: [STModule, NzButtonModule]
})
export class DemoComponent {
  url = `/users?total=200`;
  params = { a: 1, b: 2 };
  columns: Array<STColumn<UserData>> = [
    { title: '编号', index: 'id' },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    {
      title: '姓名',
      index: 'name.last',
      format: (item, _col, index) => `${index + 1}: ${item.name.last} ${item.name.first}`,
      sort: true
    },
    {
      title: '国家',
      index: 'nat',
      filter: {
        menus: [
          { text: '中国', value: 'CH' },
          { text: '美国', value: 'US' },
          { text: '德国', value: 'DE' }
        ]
      },
      sort: true
    },
    {
      title: '性别',
      index: 'gender',
      filter: {
        menus: [
          { text: 'male', value: 'male' },
          { text: 'female', value: 'female' }
        ],
        multiple: false
      },
      sort: true
    },
    { title: '注册时间', type: 'date', index: 'registered', sort: 'descend' }
  ];
}
```
