---
order: 1
title:
  zh-CN: 基础样例
  en-US: Basic Usage
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component } from '@angular/core';
import { Menu, MenuService, SettingsService } from '@delon/theme';
import { NzIconService } from 'ng-zorro-antd';

@Component({
  selector: 'app-demo',
  template: `
    <nz-switch [ngModel]="collapsed" (ngModelChange)="toggleCollapsed()"></nz-switch>
    <sidebar-nav class="d-block mt-md"></sidebar-nav>
  `,
  host: {
    '[class.d-block]': 'true',
    '[class.alain-default__collapsed]': 'collapsed',
    '[style.width.px]': 'collapsed ? 64 : 200',
  },
})
export class DemoComponent {
  menus: Menu[] = [
    {
      text: 'Heading',
      group: true,
      children: [
        {
          text: 'Dashboard <strong>HTML</strong>',
          // Support icon by https://ng.ant.design/components/icon/zh
          // Format: `anticon-{icon key}`
          icon: 'anticon-dashboard',
          badge: 5,
        },
        {
          text: 'Iconfont',
          // Support for iconfont
          icon: { type: 'iconfont', iconfont: 'icon-twitter' },
        },
        {
          text: 'Custom Class Name',
          // Support for custom class
          icon: {
            type: 'class',
            value: 'newClassName',
          },
          children: [{ text: 'Child' }, { text: 'Child' }],
        },
        {
          text: 'Level1',
          // Support for custom images
          icon: {
            type: 'img',
            value: './assets/img/avatar.jpg',
          },
          children: [
            {
              text: 'Level2',
              children: [{ text: 'Level3A' }, { text: 'Level3B-DISABLED', disabled: true }],
            },
            { text: 'Level2-DISABLED', disabled: true },
          ],
        },
      ],
    },
  ];

  constructor(menuSrv: MenuService, public settingsSrv: SettingsService, iconService: NzIconService) {
    menuSrv.add(this.menus);
    iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
  }

  get collapsed() {
    return this.settingsSrv.layout.collapsed;
  }

  toggleCollapsed() {
    this.settingsSrv.setLayout('collapsed', !this.collapsed);
  }
}
```
