import { UpperCasePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import {
  AppstoreOutline,
  BellOutline,
  EllipsisOutline,
  FullscreenExitOutline,
  FullscreenOutline,
  GithubOutline,
  GlobalOutline,
  LockOutline,
  LogoutOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  PlusOutline,
  SearchOutline,
  // Optional
  SettingOutline,
  UserOutline
} from '@ant-design/icons-angular/icons';

// #region icons

import { ReuseCustomContextMenu, ReuseTabComponent } from '@delon/abc/reuse-tab';
import { ALAIN_I18N_TOKEN, Menu, MenuService, RTLService, SettingsService, User } from '@delon/theme';
import { LayoutDefaultModule, LayoutDefaultOptions } from '@delon/theme/layout-default';
import { SettingDrawerModule } from '@delon/theme/setting-drawer';
import { deepCopy } from '@delon/util/other';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageService } from 'ng-zorro-antd/message';

import { I18NService, LangType } from '@core';

const ICONS = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  SearchOutline,
  SettingOutline,
  FullscreenOutline,
  FullscreenExitOutline,
  BellOutline,
  LockOutline,
  PlusOutline,
  UserOutline,
  LogoutOutline,
  EllipsisOutline,
  GlobalOutline,
  // Optional
  GithubOutline,
  AppstoreOutline
];

// #endregion

@Component({
  selector: 'dev-layout',
  template: `
    <layout-default [options]="options" [asideUser]="asideUserTpl">
      <layout-default-header-item direction="left">
        <a class="alain-default__nav-item" href="//github.com/ng-alain/ng-alain" target="_blank">
          <nz-icon nzType="github" />
        </a>
      </layout-default-header-item>
      <layout-default-header-item direction="middle">
        @for (m of topMenus; track $index) {
          <layout-default-top-menu-item (click)="changeMenu(m.key)" [selected]="m.selected" [disabled]="m.disabled">
            <nz-icon nzType="github" /> {{ m.label }}
          </layout-default-top-menu-item>
        }
      </layout-default-header-item>
      <layout-default-header-item direction="right">
        <a class="alain-default__nav-item" (click)="rtl.toggle()">{{ rtl.nextDir | uppercase }}</a>
      </layout-default-header-item>
      <layout-default-header-item direction="right">
        <a class="alain-default__nav-item" href="//github.com/ng-alain/ng-alain" target="_blank"> githbu </a>
      </layout-default-header-item>
      <ng-template #asideUserTpl>
        <div nz-dropdown nzTrigger="click" [nzDropdownMenu]="userMenu" class="alain-default__aside-user">
          <nz-avatar class="alain-default__aside-user-avatar" [nzSrc]="user.avatar" />
          <div class="alain-default__aside-user-info">
            <strong>{{ user.name }}</strong>
            <p class="mb0">{{ user.email }}</p>
          </div>
        </div>
        <nz-dropdown-menu #userMenu="nzDropdownMenu">
          <ul nz-menu>
            <li nz-menu-item routerLink="/pro/account/center">{{ 'menu.account.center' }}</li>
            <li nz-menu-item routerLink="/pro/account/settings">{{ 'menu.account.settings' }}</li>
          </ul>
        </nz-dropdown-menu>
      </ng-template>
      <reuse-tab [mode]="2" [customContextMenu]="customContextMenu" #reuseTab />
      <router-outlet (activate)="reuseTab.activate($event)" (attach)="reuseTab.activate($event)" />
    </layout-default>
    <setting-drawer />
  `,
  host: {
    '[class.alain-default]': 'true'
  },
  imports: [
    UpperCasePipe,
    LayoutDefaultModule,
    NzIconModule,
    NzDropDownModule,
    NzAvatarModule,
    NzMenuModule,
    ReuseTabComponent,
    RouterOutlet,
    SettingDrawerModule
  ]
})
export class DevLayoutComponent implements OnInit {
  options: LayoutDefaultOptions = {
    logoExpanded: `./assets/logo-full.svg`,
    logoCollapsed: `./assets/logo.svg`,
    hideHeader: false,
    showHeaderCollapse: true,
    showSiderCollapse: true
    // hideAside: true
  };

  lang: LangType = 'zh-CN';

  get user(): User {
    return this.settings.user;
  }
  topMenus: Array<{ key: string; label: string; selected?: boolean; disabled?: boolean }> = [
    { key: '', label: 'Default', selected: true },
    { key: 'bus', label: 'Bus', selected: false },
    { key: 'disabled', label: 'Disabbled', disabled: true }
  ];

  menus: Menu[] = [
    {
      text: 'test',
      group: true,
      children: [
        {
          text: 'Dashboard-DISABLED',
          link: '/dev/home',
          icon: 'anticon anticon-dashboard',
          i18n: 'app.header.menu.home',
          badge: 5
        },
        { text: '测试view1-id', link: '/dev/view/1', icon: 'anticon anticon-appstore' },
        { text: '测试view2-id', link: '/dev/view/2', icon: 'anticon anticon-appstore' },
        { text: 'lazy测试1', link: '/dev/lazy/p1', icon: 'anticon anticon-appstore' },
        { text: 'lazy测试2', link: '/dev/lazy/p2', icon: 'anticon anticon-appstore' },
        { text: 'lazy测试view1-id', link: '/dev/lazy/1/view', icon: 'anticon anticon-appstore' },
        { text: 'lazy测试view2-id', link: '/dev/lazy/2/view', icon: 'anticon anticon-appstore' },
        {
          text: 'Level1',
          link: '#',
          icon: 'anticon anticon-appstore',
          children: [
            {
              text: 'Level2',
              link: '#',
              children: [
                { text: 'Level3A', link: '/dev/l1' },
                { text: 'Level3B-DISABLED', link: '/dev/l1', disabled: true }
              ]
            },
            { text: 'Level2-DISABLED', link: '/dev/l2', disabled: true }
          ]
        },
        {
          text: 'ABC',
          icon: 'anticon anticon-appstore',
          children: [
            { text: 'Reuse Tab1', link: '/dev/l1', i18n: 'app.header.menu.docs' },
            { text: 'Reuse Tab2', link: '/dev/l2' },
            { text: 'Reuse Tab3', link: '/dev/l3' },
            { text: 'Reuse Tab4', link: '/dev/l4' },
            { text: 'Reuse Tab5', link: '/dev/l5' },
            { text: 'Reuse Tab6', link: '/dev/l6' },
            { text: 'Reuse Tab7', link: '/dev/l7' },
            { text: 'Ellipsis', link: '/dev/l8' }
          ]
        },
        {
          text: 'LIST',
          icon: 'anticon anticon-appstore',
          children: [
            { text: 'list', link: '/dev/list' },
            { text: 'list/item', link: '/dev/list/item' }
          ]
        }
      ]
    }
  ];

  customContextMenu: ReuseCustomContextMenu[] = [
    {
      id: 'custom1',
      title: '自定义1',
      fn: (item, m) => {
        console.log('自定义1', item, m);
      }
    },
    {
      id: 'custom2',
      title: '自定义2',
      disabled: () => true,
      fn: (item, m) => {
        console.log('自定义2', item, m);
      }
    }
  ];

  constructor(
    iconSrv: NzIconService,
    private menuSrv: MenuService,
    public settings: SettingsService,
    public msgSrv: NzMessageService,
    private router: Router,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    public rtl: RTLService
  ) {
    iconSrv.addIcon(...ICONS);
    // this.testReuse();
  }

  changeMenu(key: string): void {
    const type: Menu = {
      text: 'test',
      group: true,
      children: [{ text: `TYPE - ${key}`, link: '/dev/view/1', icon: 'anticon anticon-appstore' }]
    };
    this.menuSrv.add(key === '' ? deepCopy(this.menus) : [type]);
    for (let tm of this.topMenus) {
      tm.selected = tm.key === key;
    }
    this.loadFirstValidMenu();
  }

  // private testReuse(): void {
  //   const urls = ['/dev/l2', '/dev/l3', '/dev/l4', '/dev/l5', '/dev/l6'];
  //   const fn = (pos: number) => {
  //     if (pos >= urls.length) return;

  //     setTimeout(() => {
  //       console.log('--------------------');
  //       this.router.navigateByUrl(urls[pos]);
  //       fn(++pos);
  //     }, 300);
  //   };
  //   fn(0);
  // }

  toggleCollapsedSideabar(): void {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  toggleLang(): void {
    this.lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
    this.i18n.use(this.lang);
  }

  ngOnInit(): void {
    this.menuSrv.add(deepCopy(this.menus));
  }

  private loadFirstValidMenu(): void {
    let res: Menu | undefined;
    this.menuSrv.visit(this.menuSrv.menus, item => {
      if (res == null && item.hide !== true && item.link != null && item.link.length > 0) {
        res = item;
      }
    });
    if (res == null) return;
    this.router.navigateByUrl(res.link!);
  }
}
