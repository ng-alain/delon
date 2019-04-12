---
order: 1
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

快速生成表格；利用 `res` 可以适配后端数据格式。

## en-US

Quickly generate tables; use `res` to adapted backend data format.

```ts
import { Component } from '@angular/core';
import { STColumn } from '@delon/abc';

@Component({
  selector: 'app-demo',
  template: `
  <st [widthMode]="{type: 'strict'}" [data]="url" [req]="{params: params}" [columns]="columns"></st>`,
})
export class DemoComponent {
  url = `/users?total=2&field=list`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 80 },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email', width: 80 },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];
}
```
