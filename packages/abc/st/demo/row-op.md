---
order: 4
title:
  zh-CN: 行操作
  en-US: Row OP
---

## zh-CN

利用 `addRow`、`removeRow`、`setRow` 方法对行的操作。

> 打开控制面板了解打印明细。

## en-US

Operations on rows using `addRow`, `removeRow`, `setRow` methods.

> Open the control panel for print details.

```ts
import { Component } from '@angular/core';

import { STChange, STClickRowClassNameType, STColumn, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-demo',
  template: ` <button nz-button (click)="st.addRow({ id: 1000, email: 'add@email.com', phone: '123' })"> addRow</button>
    <button nz-button (click)="st.removeRow(0)"> removeRow index: 0 </button>
    <button nz-button (click)="st.setRow(0, { className: 'text-success' })"> Via setRow method </button>
    <st
      #st
      [data]="url"
      [req]="{ params: params }"
      [columns]="columns"
      (change)="_click($event)"
      [clickRowClassName]="clickRowClassName"
    />`,
  standalone: true,
  imports: [STModule, NzButtonModule]
})
export class DemoComponent {
  url = `/users?results=3`;
  params = { a: 1, b: 2 };
  clickRowClassName: STClickRowClassNameType = { exclusive: true, fn: () => 'text-error' };
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' }
  ];

  _click(e: STChange): void {
    console.log('click', e);
  }
}
```
