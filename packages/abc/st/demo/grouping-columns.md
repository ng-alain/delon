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
import { Component, viewChild } from '@angular/core';

import { STColumn, STComponent, STModule } from '@delon/abc/st';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button nzType="primary" (click)="addRow()">addRow</button>
    <st #st [data]="url" [req]="{ params: params }" [columns]="columns" bordered size="middle" />
  `,
  imports: [STModule, NzButtonComponent]
})
export class DemoComponent {
  private readonly st = viewChild<STComponent>('st');
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
            { title: 'last', index: 'name.last' }
          ]
        }
      ]
    }
  ];

  addRow(): void {
    this.st()?.addRow(
      {
        id: 3,
        email: 'aaa6@qq.com',
        picture: {
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/24.jpg'
        },
        name: {
          first: 'first-11',
          last: '	last-1'
        }
      },
      { index: 0 }
    );
  }
}
```
