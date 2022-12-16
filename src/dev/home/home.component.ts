import { Component } from '@angular/core';

import { LayoutDefaultService } from '@delon/theme/layout-default';

@Component({
  selector: 'dev-home',
  template: `
    <page-header [autoBreadcrumb]="false"></page-header>
    home
    <div class="mb-md"> options: {{ srv.options | json }} </div>
    <div class="mb-md">
      <button nz-button (click)="srv.toggleCollapsed()">切换折叠</button>
      <button nz-button (click)="srv.setOptions({ hideHeader: true })">隐藏顶部</button>
      <button nz-button (click)="srv.setOptions({ hideAside: true })">隐藏侧边栏</button>
      <button nz-button (click)="srv.setOptions({ hideHeader: true, hideAside: true })">隐藏顶部与侧边栏</button>
      <button nz-button (click)="srv.setOptions({ showHeaderCollapse: true })">显示顶部折叠开关</button>
      <button nz-button (click)="srv.setOptions({ showSiderCollapse: true })">显示侧边栏底部折叠开关</button>
      <button nz-button (click)="srv.setOptions({ showHeaderCollapse: true, showSiderCollapse: true })"
        >显示顶部与侧边栏底部折叠开关</button
      >
      <button nz-button (click)="srv.setOptions({})">恢复默认</button>
    </div>
  `
})
export class DevHomeComponent {
  constructor(public srv: LayoutDefaultService) {}
}
