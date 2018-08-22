---
order: 8
title: 固定列
---

适合同时展示有大量数据和数据列。

> - 若列头与内容不对齐或出现列重复，请指定列的宽度 `width`
> - 建议指定 `scroll.x` 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 `scroll.x`

```ts
import { Component } from '@angular/core';
import { NaTableColumn } from '@delon/abc';

@Component({
  selector: 'app-demo',
  template: `
    <na-table [data]="users" [columns]="columns" [scroll]="{x: '1300px'}"></na-table>
  `,
})
export class DemoComponent {
  users: any[] = Array(10)
    .fill({})
    .map((item: any, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
      };
    });
  columns: NaTableColumn[] = [
    { title: '编号1', index: 'id', fixed: 'left', width: '100px' },
    { title: '编号2', index: 'id', fixed: 'left', width: '100px' },
    { title: '编号3', index: 'id', fixed: 'left', width: '100px' },
    { title: '编号4', index: 'id' },
    { title: '编号5', index: 'id' },
    { title: '编号6', index: 'id' },
    { title: '编号7', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '姓名10', index: 'name', fixed: 'right', width: '100px' },
    { title: '姓名11', index: 'name', fixed: 'right', width: '100px' },
    { title: '年龄12', index: 'age', fixed: 'right', width: '100px' },
  ];
}
```
