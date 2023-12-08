---
order: 7
title:
  zh-CN: 自定义小部件
  en-US: Custom Widgets
---

## zh-CN

类型为 `widget` 自定义小部件，例如点击头像处理，查看[源代码](https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/img.ts)。

## en-US

The type is `widget` custom widget, eg: Click on Avatar effect, View [source code](https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/img.ts).

```ts
import { Component, ViewChild } from '@angular/core';

import { STColumn, STComponent, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-demo',
  template: `
    <div class="mb-md">
      <button (click)="st.clear()" nz-button>Clear Data</button>
      <button (click)="st.reload()" nz-button>Reload Data</button>
      <button (click)="st.clearStatus(); st.reload()" nz-button>Clear Status</button>
      <button (click)="changeImg()" nz-button>Change Img Data</button>
    </div>
    <st #st [data]="url" [columns]="columns" />
  `,
  standalone: true,
  imports: [STModule, NzButtonModule]
})
export class DemoComponent {
  url = `/users?total=100`;
  @ViewChild('st', { static: false }) private st!: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 80 },
    {
      title: '自定义头像',
      type: 'widget',
      widget: { type: 'img', params: ({ record }) => ({ img: record.picture.thumbnail }) },
      width: 150
    },
    { title: '邮箱', index: 'email' }
  ];

  changeImg(): void {
    this.st.setRow(
      0,
      { picture: { thumbnail: 'https://ng-alain.com/assets/img/logo-color.svg' } },
      { refreshSchema: true, emitReload: false }
    );
  }
}
```
