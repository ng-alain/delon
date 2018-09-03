---
order: 3
title: 搜索表单
---

配合 `load()` & `reset()` 完成搜索表单。

```ts
import { Component } from '@angular/core';
import { STColumn } from '@delon/abc';

@Component({
  selector: 'app-demo',
  template: `
  <div class="mb-md">
    <input nz-input [(ngModel)]="params.name" name="name" nzPlaceHolder="请输入姓名" style="width: 100px;" class="mr-sm">
    <button nz-button (click)="st.load(1)" [nzType]="'primary'">搜索</button>
    <button nz-button (click)="params = {}; st.reset()">重置</button>
  </div>
  <st #st [data]="url" [req]="{params: params}" [columns]="columns"></st>
  `,
})
export class DemoComponent {
  url = `/users?total=100`;
  params: any = { name: 'asdf' };
  // mock
  columns: STColumn[] = [
    { title: '编号', index: 'id', default: '-' },
    { title: '头像', type: 'img', width: '50px', index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];
}
```
