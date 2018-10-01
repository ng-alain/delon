---
order: 0
title:
  en-US: Structure
  zh-CN: 基本结构
bg: f2f4f5
---

基本结构，具备响应式布局功能，主要断点为 768px 和 576px，拖动窗口改变大小试试看。

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
  <page-header [title]="'title'"
    [breadcrumb]="breadcrumb" [logo]="logo" [action]="action" [extra]="extra" [content]="content" [tab]="tab">
    <ng-template #breadcrumb>面包屑</ng-template>
    <ng-template #logo><div class="logo">logo</div></ng-template>
    <ng-template #action><div class="action">action</div></ng-template>
    <ng-template #content><div class="desc">content</div></ng-template>
    <ng-template #extra><div class="extra">extra</div></ng-template>
    <ng-template #tab>
      <nz-tabset [nzSize]="'default'">
        <nz-tab nzTitle="页签一"></nz-tab>
        <nz-tab nzTitle="页签二"></nz-tab>
        <nz-tab nzTitle="页签三"></nz-tab>
      </nz-tabset>
    </ng-template>
  </page-header>
    `,
    styles: [`
    :host ::ng-deep .logo {
        background: #3ba0e9;
        color: #fff;
        height: 100%;
    }
    :host ::ng-deep h1.title {
        background: rgba(16, 142, 233, 1);
        color: #fff;
    }
    :host ::ng-deep .action,
    :host ::ng-deep .desc,
    :host ::ng-deep .extra {
        background: #7dbcea;
        color: #fff;
    }
    `]
})
export class DemoComponent {
}
```
