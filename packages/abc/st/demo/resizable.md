---
order: 21
title:
  zh-CN: 调整尺寸
  en-US: Resizable
---

## zh-CN

基于 [nz-resizable](https://ng.ant.design/experimental/resizable/zh) 调整表头宽度。

> - 注意：不要忘记在 `src/styles` 下导入 `nz-resizable` Less 样式文件（`@import '~ng-zorro-antd/resizable/style/entry.less';`）
> - **不支持多表头**

## en-US

Resize the table header base on [nz-resizable](https://ng.ant.design/experimental/resizable/en).

> - Note: Don't forget to import the `nz-resizable` Less style (`@import'~ng-zorro-antd/resizable/style/entry.less';`) file in `src/styles`.
> - **Multiple headers not supported**

```ts
import { Component } from '@angular/core';
import { STChange, STColumn } from '@delon/abc/st';

@Component({
  selector: 'app-demo',
  template: `
    <st
      [data]="url"
      [columns]="columns"
      [widthMode]="{ type: 'strict' }"
      resizable
      (change)="onChange($event)"
    ></st>
  `,
})
export class DemoComponent {
  url = `/users?total=2&field=list`;
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 80, resizable: false },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email', width: 150, resizable: { minWidth: 150 } },
    { title: '电话', index: 'phone' },
    { title: '佣金', index: 'price', type: 'currency' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];

  onChange({ type, resize }: STChange): void {
    if (type === 'resize') {
      console.log(resize?.width);
    }
  }
}
```
