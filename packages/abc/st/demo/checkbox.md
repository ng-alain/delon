---
order: 3
title:
  zh-CN: 可选择
  en-US: Checkbox
---

## zh-CN

利用 `change` 监听所选的数据；使用 `page.checkbox_id_map` 标识实现分页缓存可选择数据。

## en-US

Use `change` event get selected data, and use `page.checkbox_id_map` as an identifier to enable paginated caching of selectable items.

```ts
import { Component } from '@angular/core';

import { STColumn, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-demo',
  template: ` <div class="mb-md">
      Check Count:{{ st.checklist.length }}
      <button nz-button (click)="st.checkAll(true)">All</button>
      <button nz-button (click)="st.clearCheck()">Clean</button>
    </div>
    <st #st [data]="url" [columns]="columns" [page]="{ checkbox_id_map: 'id' }" />`,
  imports: [STModule, NzButtonModule]
})
export class DemoComponent {
  url = `/users?total=100&ignoreDisabled=1`;
  columns: STColumn[] = [
    { title: '编号', index: 'id', type: 'checkbox' },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' }
  ];
}
```
