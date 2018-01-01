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

@Component({
    selector: 'app-demo',
    template: `
<pro-header [title]="'单号：234231029431'">
    <ng-template #breadcrumb>
        <nz-breadcrumb>
            <nz-breadcrumb-item><a>一级菜单</a></nz-breadcrumb-item>
            <nz-breadcrumb-item><a>二级菜单</a></nz-breadcrumb-item>
            <nz-breadcrumb-item><a>三级菜单</a></nz-breadcrumb-item>
        </nz-breadcrumb>
    </ng-template>
    <ng-template #logo><img src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png"></ng-template>
    <ng-template #action>
        <nz-button-group [nzSize]="'large'">
            <button nz-button>操作</button>
            <button nz-button>操作</button>
        </nz-button-group>
        <nz-dropdown class="mx-sm">
            <button nz-button nz-dropdown [nzSize]="'large'"><i class="anticon anticon-ellipsis"></i></button>
            <ul nz-menu>
                <li nz-menu-item>选项一</li>
                <li nz-menu-item>选项二</li>
                <li nz-menu-item>选项三</li>
            </ul>
        </nz-dropdown>
        <button nz-button [nzType]="'primary'" [nzSize]="'large'">主操作</button>
    </ng-template>
    <ng-template #content>
        <desc-list size="small" col="2">
            <desc-list-item term="创建人">曲丽丽</desc-list-item>
            <desc-list-item term="订购产品">XX 服务</desc-list-item>
            <desc-list-item term="创建时间">2017-07-07</desc-list-item>
            <desc-list-item term="关联单据"><a (click)="msg.success('yes')">12421</a></desc-list-item>
            <desc-list-item term="生效日期">2017-07-07 ~ 2017-08-08</desc-list-item>
            <desc-list-item term="备注">请于两个工作日内确认</desc-list-item>
        </desc-list>
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
            <nz-tab><ng-template #nzTabHeading>详情</ng-template></nz-tab>
            <nz-tab><ng-template #nzTabHeading>规则</ng-template></nz-tab>
        </nz-tabset>
    </ng-template>
</pro-header>
    `
})
export class DemoComponent {
}
```
