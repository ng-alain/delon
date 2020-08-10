---
order: 4
title:
  zh-CN: 单选框
  en-US: Radio
---

## zh-CN

利用 `change` 监听所选的数据。

## en-US

Use `change` event get selected data.

```ts
import { Component } from '@angular/core';
import { STChange, STColumn, STData } from '@delon/abc/st';

@Component({
  selector: 'app-demo',
  template: `<st
    [data]="url"
    [columns]="columns"
    [req]="{ params: params }"
    [res]="{ process: dataChange }"
    (change)="change($event)"
  ></st>`,
})
export class DemoComponent {
  url = `/users?total=300`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '编号', index: 'id', type: 'radio' },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];

  change(ret: STChange): void {
    console.log('change', ret);
  }

  dataChange(data: STData[]): STData[] {
    return data.map((i: STData, index: number) => {
      i.disabled = index === 0;
      i.hidden = index === 1;
      return i;
    });
  }
}
```
