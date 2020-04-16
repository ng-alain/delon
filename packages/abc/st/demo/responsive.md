---
order: 9
title:
  zh-CN: 响应式
  en-US: Responsive
---

## zh-CN

小屏幕下将以响应模式堆叠显示，`responsiveHideHeaderFooter` 属性可以使大屏幕不显示头和尾，反之。

## en-US

Table columns are displayed as stacked in responsive mode if the screen size becomes smaller.

```ts
import { Component } from '@angular/core';
import { STColumn } from '@delon/abc/table';

@Component({
  selector: 'app-demo',
  template: `
  <st [data]="url" [req]="{params: params}" [columns]="columns"
    header="The header" footer="The footer" responsiveHideHeaderFooter>
  </st>`,
})
export class DemoComponent {
  url = `/users?total=100`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];
}
```
