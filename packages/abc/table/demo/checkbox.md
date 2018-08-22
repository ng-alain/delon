---
order: 3
title: 可选择
---

利用 `change` 监听所选的数据清单。

```ts
import { Component } from '@angular/core';
import { NaTableColumn, NaTableData, NaTableChange } from '@delon/abc';

@Component({
  selector: 'app-demo',
  template: `<na-table [data]="url" [columns]="columns"
        [req]="{params: params}" [res]="{process: dataProcess}"
        (change)="change($event)"></na-table>`,
})
export class DemoComponent {
  url = `/users?total=100`;
  params = { a: 1, b: 2 };
  columns: NaTableColumn[] = [
    { title: '编号', index: 'id.value', type: 'checkbox' },
    { title: '头像', type: 'img', width: '50px', index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];
  change(e: NaTableChange) {
    console.log('change', e);
  }
  dataProcess(data: NaTableData[]) {
    return data.map((i: NaTableData, index: number) => {
      i.disabled = index === 0;
      return i;
    });
  }
}
```
