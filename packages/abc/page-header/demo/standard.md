---
order: 1
title:
  en-US: Standard
  zh-CN: 标准
bg: f2f4f5
---

标准页头。

```ts
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-demo',
  template: `
  <page-header [title]="'单号：234231029431'"
    [breadcrumb]="breadcrumb" [logo]="logo" [action]="action" [extra]="extra" [content]="content" [tab]="tab">
    <ng-template #breadcrumb>
      <nz-breadcrumb>
        <nz-breadcrumb-item><a>一级菜单</a></nz-breadcrumb-item>
        <nz-breadcrumb-item><a>二级菜单</a></nz-breadcrumb-item>
        <nz-breadcrumb-item><a>三级菜单</a></nz-breadcrumb-item>
      </nz-breadcrumb>
    </ng-template>
    <ng-template #logo><img src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png"></ng-template>
    <ng-template #action>
      <nz-button-group>
        <button nz-button>操作</button>
        <button nz-button>操作</button>
      </nz-button-group>
      <button nz-button nz-dropdown [nzDropdownMenu]="actionMoreMenu" class="mx-sm">
        <i nz-icon nzType="ellipsis"></i>
      </button>
      <nz-dropdown-menu #actionMoreMenu="nzDropdownMenu">
        <ul nz-menu>
          <li nz-menu-item>选项一</li>
          <li nz-menu-item>选项二</li>
          <li nz-menu-item>选项三</li>
        </ul>
      </nz-dropdown-menu>
      <button nz-button [nzType]="'primary'">主操作</button>
    </ng-template>
    <ng-template #content>
      <sv-container size="small" col="2">
        <sv label="创建人">曲丽丽</sv>
        <sv label="订购产品">XX 服务</sv>
        <sv label="创建时间">2017-07-07</sv>
        <sv label="关联单据"><a (click)="msg.success('yes')">12421</a></sv>
        <sv label="生效日期">2017-07-07 ~ 2017-08-08</sv>
        <sv label="备注">请于两个工作日内确认</sv>
      </sv-container>
    </ng-template>
    <ng-template #extra>
      <div nz-row>
        <div nz-col nzXs="24" nzSm="12">
          <p class="text-grey">状态</p>
          <p class="text-lg">待审批</p>
        </div>
        <div nz-col nzXs="24" nzSm="12">
          <p class="text-grey">订单金额</p>
          <p class="text-lg">¥ 568.08</p>
        </div>
      </div>
    </ng-template>
    <ng-template #tab>
      <nz-tabset [nzSize]="'default'">
        <nz-tab nzTitle="详情"></nz-tab>
        <nz-tab nzTitle="规则"></nz-tab>
      </nz-tabset>
    </ng-template>
  </page-header>
  `
})
export class DemoComponent {
  constructor(public msg: NzMessageService) {}
}
```
