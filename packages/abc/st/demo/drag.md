---
order: 4
title:
  en-US: Drag sorting
  zh-CN: 拖拽排序
---

## zh-CN

使用 `drag` 实现行拖拽排序。

## en-US

Use `drag` to implement row drag sorting.

```ts
import { Component } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';

@Component({
  selector: 'app-demo',
  template: `<st [data]="users" [columns]="columns" drag />`,
  imports: [STModule]
})
export class DemoComponent {
  users: STData[] = Array(10)
    .fill({})
    .map((_, idx) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20
      };
    });
  columns: STColumn[] = [
    { title: '编号4', index: 'id' },
    { title: '编号5', index: 'id' },
    { title: '编号6', index: 'id' },
    { title: '编号7', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' }
  ];
}
```
