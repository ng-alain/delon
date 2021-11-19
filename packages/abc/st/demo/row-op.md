---
order: 4
title:
  zh-CN: 行操作
  en-US: Row OP
---

## zh-CN

利用 `setRow(0, { className: 'text-red' })` 实现第1行动态设置样式，也可以通过 `clickRowClassName` 实现行点击样式交互。

> 打开控制面板了解打印明细。

## en-US

Use `setRow(0, {className:'text-red' })` to dynamically set the style of the first row, or use `clickRowClassName` to implement row click style interaction.

> Open the control panel for print details.

```ts
import { Component } from '@angular/core';

import { STChange, STClickRowClassNameType, STColumn } from '@delon/abc/st';

@Component({
  selector: 'app-demo',
  template: ` <button nz-button (click)="st.setRow(0, { className: 'text-success' })"> Via setRow method </button>
    <st
      #st
      [data]="url"
      [req]="{ params: params }"
      [columns]="columns"
      (change)="_click($event)"
      [clickRowClassName]="clickRowClassName"
    ></st>`
})
export class DemoComponent {
  url = `/users?results=3`;
  params = { a: 1, b: 2 };
  clickRowClassName: STClickRowClassNameType = { exclusive: true, fn: () => 'text-error' };
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    {
      title: '',
      buttons: [
        {
          text: 'btn',
          type: 'link',
          click: e => console.log('btn click', e)
        }
      ]
    }
  ];

  _click(e: STChange): void {
    console.log('click', e);
  }
}
```
