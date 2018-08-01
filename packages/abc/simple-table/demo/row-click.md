---
order: 3
title: 行事件
---

利用 `(rowClick)` 或 `(rowDblClick)` 实现点击行回调，因于DOM事件的因素同一元素是无法区分单或双击，若明确不需要双击事件，可以设定 `rowClickTime` 值为 `0` 以防止 `200ms` 迟延。

> 打开控制面板了解打印明细。

```ts
import { Component } from '@angular/core';
import { SimpleTableColumn, SimpleTableRowClick } from '@delon/abc';

@Component({
  selector: 'app-demo',
  template: `
  <simple-table [data]="url"
    [extraParams]="params" [total]="total" [columns]="columns"
    [resReName]="{list: 'results' }"
    (rowClick)="_click($event, 'rowClick')"
    (rowDblClick)="_click($event, 'rowDblClick')"
    ></simple-table>`,
})
export class DemoComponent {
  url = `https://randomuser.me/api/?results=3`;
  params = { a: 1, b: 2 };
  // mock
  total = 100;
  columns: SimpleTableColumn[] = [
    { title: '编号', index: 'id.value' },
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

  _click(e: SimpleTableRowClick, type: string) {
    console.log(type, e);
  }
}
```
