---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import {
  Component,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ContextMenuService } from '@delon/theme';

@Component({
  selector: 'app-demo',
  template: `
  <div (contextmenu)="show($event)" class="area">
    Area
  </div>
  <ng-template #menu>
    <ul nz-menu nzInDropDown>
      <li nz-menu-item>1st menu item</li>
      <li nz-menu-item>2nd menu item</li>
      <li nz-menu-item nzDisabled>disabled menu item</li>
      <li nz-submenu>
        <span title>sub menu</span>
        <ul>
          <li nz-menu-item>3rd menu item</li>
          <li nz-menu-item>4th menu item</li>
        </ul>
      </li>
      <li nz-submenu nzDisabled>
        <span title>disabled sub menu</span>
        <ul>
          <li nz-menu-item>3rd menu item</li>
          <li nz-menu-item>4th menu item</li>
        </ul>
      </li>
    </ul>
  </ng-template>
  `,
  styles: [
    `
    :host .area {
      height: 150px;
      line-height: 150px;
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: #f0f0f069;
    }
    `
  ]
})
export class DemoComponent {
  @ViewChild('menu')
  menuRef: TemplateRef<any>;

  constructor(
    private containerRef: ViewContainerRef,
    private srv: ContextMenuService,
  ) {}

  show(e: MouseEvent) {
    this.srv.open(e, this.menuRef, this.containerRef);
  }
}
```
