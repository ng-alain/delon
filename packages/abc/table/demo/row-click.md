---
order: 3
title: 行事件
---

利用 `(change)` 实现点击行回调，因于DOM事件的因素同一元素是无法区分单或双击，若明确不需要双击事件，可以设定 `rowClickTime` 值为 `0` 以防止 `200ms` 迟延。

> 打开控制面板了解打印明细。

```ts
import { Component } from '@angular/core';
import { NaTableColumn, NaTableChange } from '@delon/abc';

@Component({
  selector: 'app-demo',
  template: `
  <na-table [data]="url"
    [req]="{params: params}" [columns]="columns"
    (change)="_click($event)"></na-table>`,
})
export class DemoComponent {
  url = `/users?results=3`;
  params = { a: 1, b: 2 };
  // mock
  columns: NaTableColumn[] = [
    { title: '编号', index: 'id' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    {
      title: '',
      buttons: [
        {
          text: 'btn',
          type: 'link',
          click: (e: any) => console.log('btn click', e),
        },
      ],
    },
  ];

  _click(e: NaTableChange) {
    console.log(e);
  }
}
```
