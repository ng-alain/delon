---
order: 1
title:
  zh-CN: 基础样例
  en-US: Basic Usage
---

## zh-CN

点击右侧问号切换状态菜单。

## en-US

Click the question icon on the right to switch the status menu.

```ts
import { Component } from '@angular/core';

import { QuickMenuComponent } from '@delon/abc/quick-menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button type="button" (click)="expand = !expand">{{ expand ? '收缩' : '展开' }}</button>
    <quick-menu [(expand)]="expand">
      <nz-list [nzBordered]="false" [nzSplit]="false">
        <nz-list-item><a href="#">Link1</a></nz-list-item>
        <nz-list-item><a href="#">Link2</a></nz-list-item>
        <nz-list-item><a href="#">Link3</a></nz-list-item>
        <nz-list-item><a href="#">Link4</a></nz-list-item>
        <nz-list-item><a href="#">Link5</a></nz-list-item>
      </nz-list>
    </quick-menu>
  `,
  standalone: true,
  imports: [NzButtonModule, QuickMenuComponent, NzListModule]
})
export class DemoComponent {
  expand = false;
}
```
