---
type: Layout
title: page-header
subtitle: Page Header
cols: 1
module: import { PageHeaderModule } from '@delon/abc/page-header';
---

The page header is used to declare the subject of the page and contains the most important information that the user is concerned about, so that the user can quickly understand what the current page and functions.

## API

### page-header

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[title]` | Title of the page | `string,TemplateRef<void>` | - | ✅ |
| `[titleSub]` | Sub title of the page | `string,TemplateRef<void>` | - | ✅ |
| `[autoTitle]` | Whether to automatically generate the title and locate it from the main menu with the current route | `boolean` | `true` | ✅ |
| `[syncTitle]` | Whether to automatically synchronize the title to `TitleService`, `ReuseService`, only valid when `title` is of type `string` | `boolean` | `true` | ✅ |
| `[home]` | Home page text of the breadcrumb, if empty is specified, it will not be displayed | `string` | `首页` | ✅ |
| `[homeLink]` | Home page link of the breadcrumb | `string` | `/` | ✅ |
| `[homeI18n]` | Home page i18n of the breadcrumb | `string` | - | ✅ |
| `[autoBreadcrumb]` | Whether to automatically generate navigation, use the current route to locate from the main menu | `boolean` | `true` | ✅ |
| `[recursiveBreadcrumb]` | Search automatically upward recursively, if the menu data source contains `/ware`, then `/ware/1` is also regarded as `/ware` item | `boolean` | `false` | ✅ |
| `[loading]` | Whether loading | `boolean` | `false` | - |
| `[wide]` | Whether wide | `boolean` | `false` | - |
| `[fixed]` | Whether fixed mode | `boolean` | `false` | ✅ |
| `[fixedOffsetTop]` | Fixed offset of the fixed mode | `number` | `64` | ✅ |
| `[breadcrumb]` | Custom navigation area | `TemplateRef<void>` | - | - |
| `[logo]` | Custom LOGO area | `TemplateRef<void>` | - | - |
| `[action]` | Custom action area | `TemplateRef<void>` | - | - |
| `[content]` | Custom content area | `TemplateRef<void>` | - | - |
| `[extra]` | Customize extra information area | `TemplateRef<void>` | - | - |
| `[tab]` | Custom tab area | `TemplateRef<void>` | - | - |

## FAQ

### Automatically generated navigation

By default, the navigation is automatically generated based on the menu data. Sometimes you may want to hide the menu data of a certain node, you can specify the menu `hideInBreadcrumb: true`.

### Fixed mode

The fixed mode will override the reuse-tab component during scrolling.

---

## Examples

### Structure

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

import { PageHeaderComponent } from '@delon/abc/page-header';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'components-page-header-structure',
  template: `
    <page-header
      [title]="'title'"
      [titleSub]="'titleSub'"
      [breadcrumb]="breadcrumb"
      [logo]="logo"
      [action]="action"
      [extra]="extra"
      [content]="content"
      [tab]="tab"
    >
      <ng-template #breadcrumb>面包屑</ng-template>
      <ng-template #logo><div class="logo">logo</div></ng-template>
      <ng-template #action><div class="action">action</div></ng-template>
      <ng-template #content><div class="desc">content</div></ng-template>
      <ng-template #extra><div class="extra">extra</div></ng-template>
      <ng-template #tab>
        <nz-tabs [nzSize]="'default'">
          <nz-tab nzTitle="页签一" />
          <nz-tab nzTitle="页签二" />
          <nz-tab nzTitle="页签三" />
        </nz-tabs>
      </ng-template>
    </page-header>
  `,
  styles: [
    `
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
    `
  ],
  encapsulation: ViewEncapsulation.Emulated,
  imports: [PageHeaderComponent, NzTabsModule]
})
export class ComponentsPageHeaderStructure {}
```

### Standard

```typescript
import { Component, inject } from '@angular/core';

import { PageHeaderComponent } from '@delon/abc/page-header';
import { SVModule } from '@delon/abc/sv';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSpaceCompactComponent } from 'ng-zorro-antd/space';

@Component({
  selector: 'components-page-header-standard',
  template: `
    <page-header
      [title]="'单号：234231029431'"
      [breadcrumb]="breadcrumb"
      [logo]="logo"
      [action]="action"
      [extra]="extra"
      [content]="content"
      [tab]="tab"
    >
      <ng-template #breadcrumb>
        <nz-breadcrumb>
          <nz-breadcrumb-item><a>一级菜单</a></nz-breadcrumb-item>
          <nz-breadcrumb-item><a>二级菜单</a></nz-breadcrumb-item>
          <nz-breadcrumb-item><a>三级菜单</a></nz-breadcrumb-item>
        </nz-breadcrumb>
      </ng-template>
      <ng-template #logo><img src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png" /></ng-template>
      <ng-template #action>
        <nz-space-compact>
          <button nz-button>操作</button>
          <button nz-button>操作</button>
        </nz-space-compact>
        <button nz-button nz-dropdown [nzDropdownMenu]="actionMoreMenu" class="mx-sm">
          <nz-icon nzType="ellipsis" />
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
        <nz-tabs [nzSize]="'default'">
          <nz-tab nzTitle="详情" />
          <nz-tab nzTitle="规则" />
        </nz-tabs>
      </ng-template>
    </page-header>
  `,
  imports: [
    PageHeaderComponent,
    NzBreadCrumbModule,
    NzButtonModule,
    NzSpaceCompactComponent,
    NzDropdownModule,
    NzTabsModule,
    NzGridModule,
    NzIconModule,
    SVModule
  ]
})
export class ComponentsPageHeaderStandard {
  readonly msg = inject(NzMessageService);
}
```

### With Image

```typescript
import { Component } from '@angular/core';

import { PageHeaderComponent } from '@delon/abc/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
  selector: 'components-page-header-image',
  template: `
    <page-header [title]="'卡片列表'" [breadcrumb]="breadcrumb" [extra]="extra" [content]="content">
      <ng-template #breadcrumb>
        <nz-breadcrumb>
          <nz-breadcrumb-item><a>一级菜单</a></nz-breadcrumb-item>
          <nz-breadcrumb-item><a>二级菜单</a></nz-breadcrumb-item>
          <nz-breadcrumb-item><a>三级菜单</a></nz-breadcrumb-item>
        </nz-breadcrumb>
      </ng-template>
      <ng-template #extra>
        <div style="margin-top: -60px; text-align: center; width: 195px;">
          <img class="img-fluid" src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png" />
        </div>
      </ng-template>
      <ng-template #content>
        <p
          >段落示意：蚂蚁金服务设计平台
          ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。</p
        >
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
    </page-header>
  `,
  imports: [PageHeaderComponent, NzBreadCrumbModule]
})
export class ComponentsPageHeaderImage {}
```

### undefined

```typescript
import { Component } from '@angular/core';

import { PageHeaderComponent } from '@delon/abc/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
  selector: 'components-page-header-simple',
  template: `
    <page-header [title]="'页面标题'" [breadcrumb]="breadcrumb">
      <ng-template #breadcrumb>
        <nz-breadcrumb>
          <nz-breadcrumb-item><a>一级菜单</a></nz-breadcrumb-item>
          <nz-breadcrumb-item><a>二级菜单</a></nz-breadcrumb-item>
          <nz-breadcrumb-item><a>三级菜单</a></nz-breadcrumb-item>
        </nz-breadcrumb>
      </ng-template>
    </page-header>
  `,
  imports: [PageHeaderComponent, NzBreadCrumbModule]
})
export class ComponentsPageHeaderSimple {}
```
