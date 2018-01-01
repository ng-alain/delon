---
order: 3
title:
  en-US: With Image
  zh-CN: 带图
bg: f2f4f5
---

带图片的页头。

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
<pro-header [title]="'卡片列表'">
    <ng-template #breadcrumb>
        <nz-breadcrumb>
            <nz-breadcrumb-item><a>一级菜单</a></nz-breadcrumb-item>
            <nz-breadcrumb-item><a>二级菜单</a></nz-breadcrumb-item>
            <nz-breadcrumb-item><a>三级菜单</a></nz-breadcrumb-item>
        </nz-breadcrumb>
    </ng-template>
    <ng-template #extra>
        <div style="margin-top: -60px; text-align: center; width: 195px;">
            <img class="img-fluid" src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png">
        </div>
    </ng-template>
    <ng-template #content>
        <p>段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。</p>
        <div class="d-flex pt-md">
            <a class="d-flex pr-lg">
                <img class="pr-sm" src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" />快速开始
            </a>
            <a class="d-flex pr-lg">
                <img class="pr-sm" src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" />产品简介
            </a>
            <a class="d-flex">
                <img class="pr-sm" src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" />产品文档
            </a>
        </div>
    </ng-template>
</pro-header>
    `
})
export class DemoComponent {
}
```
