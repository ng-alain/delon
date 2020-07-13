---
order: 8
title:
  en-US: Grouping table head
  zh-CN: 表头分组
---

## zh-CN

`columns[n]` 可以内嵌 `children`，以渲染分组表头。

## en-US

Group table head with `columns[n].children`.

```ts
import { Component } from '@angular/core';
import { STColumn } from '@delon/abc/st';

@Component({
  selector: 'app-demo',
  template: ` <st #st [data]="url" [req]="{ params: params }" [columns]="columns" bordered size="middle"> </st>`,
})
export class DemoComponent {
  url = `/users?total=2&field=list`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '编号', index: 'id', sort: true, width: 100 },
    {
      title: 'Other',
      children: [
        { title: '头像', type: 'img', index: 'picture.thumbnail', width: 60 },
        { title: '邮箱', index: 'email' },
        {
          title: '姓名',
          sort: true,
          children: [
            { title: 'first', index: 'name.first', sort: true },
            { title: 'last', index: 'name.last' },
          ],
        },
      ],
    },
  ];
}
```