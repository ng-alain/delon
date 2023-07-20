---
order: 8
title:
  en-US: colSpan and rowSpan
  zh-CN: 表格行/列合并
---

## zh-CN

表格支持行/列合并，使用 `onCell` 进行设置，若返回 `colSpan` 或者 `rowSpan` 设值为 0 时，设置的表格不会渲染。

## en-US

The table supports row/column merging, use `onCell` to set, if return `colSpan` or `rowSpan` is set to 0, the set table will not be rendered.

```ts
import { Component } from '@angular/core';

import { STColumn, STData, STOnCellResult } from '@delon/abc/st';

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const sharedOnCell = (_: STData, index: number): STOnCellResult => {
  if (index === 1) {
    return { colSpan: 0 };
  }

  return {};
};

@Component({
  selector: 'app-demo',
  template: ` <st #st [data]="url" [ps]="5" [req]="{ params: params }" [columns]="columns" bordered size="middle">
  </st>`
})
export class DemoComponent {
  url = `/users?total=2&field=list`;
  params = { a: 1, b: 2 };

  columns: STColumn[] = [
    { title: '编号', index: 'id', sort: true, width: 100 },
    { title: '头像', type: 'img', index: 'picture.thumbnail', width: 60 },
    {
      title: '邮箱',
      index: 'email',
      onCell: (_, index) => ({
        colSpan: index === 1 ? 5 : 1
      })
    },
    {
      title: 'first',
      index: 'name.first',
      sort: true,
      className: 'text-center',
      onCell: (_, index) => {
        if (index === 3) {
          return { rowSpan: 2 };
        }
        // These two are merged into above cell
        if (index === 4) {
          return { rowSpan: 0 };
        }
        if (index === 1) {
          return { colSpan: 0 };
        }

        return {};
      }
    },
    { title: 'last', index: 'name.last', onCell: sharedOnCell }
  ];
}
```
