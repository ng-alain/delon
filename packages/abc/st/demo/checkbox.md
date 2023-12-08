---
order: 3
title:
  zh-CN: 可选择
  en-US: Checkbox
---

## zh-CN

利用 `change` 监听所选的数据。

## en-US

Use `change` event get selected data.

```ts
import { Component } from '@angular/core';

import { STChange, STColumn, STData, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-demo',
  template: ` <div class="mb-md">
      <button nz-button (click)="st.checkAll(true)">All</button>
      <button nz-button (click)="st.clearCheck()">Clean</button>
    </div>
    <st
      #st
      [data]="url"
      [columns]="columns"
      [req]="{ params: params }"
      [res]="{ process: dataProcess }"
      (change)="change($event)"
    />`,
  standalone: true,
  imports: [STModule, NzButtonModule]
})
export class DemoComponent {
  url = `/users?total=100`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '编号', index: 'id.value', type: 'checkbox' },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' }
  ];
  change(e: STChange): void {
    console.log('change', e);
  }
  dataProcess(data: STData[]): STData[] {
    return data.map((i, index) => {
      i.disabled = index === 0;
      if (index === 1) i.checked = true;
      return i;
    });
  }
}
```
