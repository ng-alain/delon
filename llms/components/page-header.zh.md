---
type: Layout
title: page-header
subtitle: 页头
cols: 1
module: import { PageHeaderModule } from '@delon/abc/page-header';
---

页头用来声明页面的主题，包含了用户所关注的最重要的信息，使用户可以快速理解当前页面是什么以及它的功能。

## API

### page-header

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[title]` | 标题名 | `string,TemplateRef<void>` | - | ✅ |
| `[titleSub]` | 子标题 | `string,TemplateRef<void>` | - | ✅ |
| `[autoTitle]` | 是否自动生成标题，以当前路由从主菜单中定位 | `boolean` | `true` | ✅ |
| `[syncTitle]` | 是否自动将标题同步至 `TitleService`、`ReuseService` 下，仅 `title` 为 `string` 类型时有效 | `boolean` | `true` | ✅ |
| `[home]` | 首页文本，若指定空表示不显示 | `string` | `首页` | ✅ |
| `[homeLink]` | 首页链接 | `string` | `/` | ✅ |
| `[homeI18n]` | 首页链接国际化参数 | `string` | - | ✅ |
| `[autoBreadcrumb]` | 是否自动生成导航，以当前路由从主菜单中定位 | `boolean` | `true` | ✅ |
| `[recursiveBreadcrumb]` | 是否自动向上递归查找，菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项 | `boolean` | `false` | ✅ |
| `[loading]` | 是否加载中 | `boolean` | `false` | - |
| `[wide]` | 是否定宽 | `boolean` | `false` | - |
| `[fixed]` | 是否固定模式 | `boolean` | `false` | ✅ |
| `[fixedOffsetTop]` | 固定偏移值 | `number` | `64` | ✅ |
| `[breadcrumb]` | 自定义导航区域 | `TemplateRef<void>` | - | - |
| `[logo]` | 自定义LOGO区域 | `TemplateRef<void>` | - | - |
| `[action]` | 自定义操作区域 | `TemplateRef<void>` | - | - |
| `[content]` | 自定义内容区域 | `TemplateRef<void>` | - | - |
| `[extra]` | 自定义额外信息区域 | `TemplateRef<void>` | - | - |
| `[tab]` | 自定义标签区域 | `TemplateRef<void>` | - | - |

## 常见问题

### 自动生成导航

默认情况下会根据菜单数据自动生成导航，有时你可能希望隐藏某个节点菜单数据时，可以指定菜单的 `hideInBreadcrumb: true`。

### 固定模式

固定模式在滚动过程中会覆盖 `reuse-tab` 组件。

---

## 代码示例

### 基本结构

基本结构，具备响应式布局功能，主要断点为 768px 和 576px，拖动窗口改变大小试试看。

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

### 标准

标准页头。

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

### 带图

带图片的页头。

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

### Simple

简单的页头。

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
