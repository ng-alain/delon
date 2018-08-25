---
order: 2
title: 列类型
---

支持十种不同列类型，多选、单选、徽标、标签、图片、数字、货币、日期、布尔徽章。也可以使用自定义列完成更复杂渲染。

```ts
import { Component } from '@angular/core';
import { NaTableColumn, NaTableColumnBadge, NaTableColumnTag } from '@delon/abc';

const BADGE: NaTableColumnBadge = {
  1: { text: '成功', color: 'success' },
  2: { text: '错误', color: 'error' },
  3: { text: '进行中', color: 'processing' },
  4: { text: '默认', color: 'default' },
  5: { text: '警告', color: 'warning' },
};
const TAG: NaTableColumnTag = {
  1: { text: '成功', color: 'green' },
  2: { text: '错误', color: 'red' },
  3: { text: '进行中', color: 'blue' },
  4: { text: '默认', color: '' },
  5: { text: '警告', color: 'orange' },
};
const r = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

@Component({
  selector: 'app-demo',
  template: `
  <button nz-button (click)="reload()">Reload</button>
  <na-table #st [data]="users" [columns]="columns"></na-table>
  `,
})
export class DemoComponent {
  users: any[] = [];
  columns: NaTableColumn[] = [
    { title: '编号', index: 'id' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age' },
    { title: 'tag', index: 'tag', type: 'tag', tag: TAG },
    { title: 'badge', index: 'badge', type: 'badge', badge: BADGE },
    { title: 'yn', index: 'yn', type: 'yn' },
  ];

  reload() {
    this.users = Array(10)
    .fill({})
    .map((item: any, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: r(10, 50),
        tag: r(1, 5),
        badge: r(1, 5),
        yn: [ true, false ][r(1, 5) % 2],
      };
    });
  }

  constructor() {
    this.reload();
  }
}
```
