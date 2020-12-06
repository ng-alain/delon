import { Component, Inject, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { ALAIN_I18N_TOKEN, Menu, MenuService, SettingsService } from '@delon/theme';
import { NzIconService } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';

// #region icons

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
  UserOutline,
} from '@ant-design/icons-angular/icons';
import { I18NService, LangType } from '@core';
import { ReuseCustomContextMenu } from '@delon/abc/reuse-tab';
import { LayoutDefaultOptions } from '@delon/theme/layout-default';

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
  AppstoreOutline,
];

// #endregion

@Component({
  selector: 'dev-layout',
  template: `
    <layout-default [options]="options">
      <layout-default-header-item direction="left">
        <a class="alain-default__nav-item" href="//github.com/ng-alain/ng-alain" target="_blank">
          <i nz-icon nzType="github"></i>
        </a>
      </layout-default-header-item>
      <layout-default-header-item direction="right">
        <a class="alain-default__nav-item" href="//github.com/ng-alain/ng-alain" target="_blank"> githbu </a>
      </layout-default-header-item>
      <reuse-tab [mode]="2" [customContextMenu]="customContextMenu" #reuseTab></reuse-tab>
      <router-outlet (activate)="reuseTab.activate($event)"></router-outlet>
    </layout-default>
  `,
  host: {
    '[class.alain-default]': 'true',
  },
  preserveWhitespaces: false,
})
export class DevLayoutComponent implements OnInit {
  options: LayoutDefaultOptions = {
    logoExpanded: `./assets/logo-full.svg`,
    logoCollapsed: `./assets/logo.svg`,
  };

  lang: LangType = 'zh-CN';

  menus: Menu[] = [
    {
      text: 'test',
      group: true,
      children: [
        {
          text: 'Dashboard-DISABLED',
          link: '/dev',
          icon: 'anticon anticon-dashboard',
          i18n: 'app.header.menu.home',
          badge: 5,
          disabled: true,
        },
        { text: '测试view1-id', link: '/dev/view/1' },
        { text: '测试view2-id', link: '/dev/view/2' },
        { text: 'lazy测试1', link: '/dev/lazy/p1' },
        { text: 'lazy测试2', link: '/dev/lazy/p2' },
        { text: 'lazy测试view1-id', link: '/dev/lazy/1/view' },
        { text: 'lazy测试view2-id', link: '/dev/lazy/2/view' },
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
                { text: 'Level3B-DISABLED', link: '/dev/l1', disabled: true },
              ],
            },
            { text: 'Level2-DISABLED', link: '/dev/l2', disabled: true },
          ],
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
            { text: 'Ellipsis', link: '/dev/l8' },
          ],
        },
      ],
    },
  ];

  customContextMenu: ReuseCustomContextMenu[] = [
    {
      id: 'custom1',
      title: '自定义1',
      fn: (item, m) => {
        console.log('自定义1', item, m);
      },
    },
    {
      id: 'custom2',
      title: '自定义2',
      disabled: () => true,
      fn: (item, m) => {
        console.log('自定义2', item, m);
      },
    },
  ];

  constructor(
    iconSrv: NzIconService,
    private menuSrv: MenuService,
    public settings: SettingsService,
    public msgSrv: NzMessageService,
    // private router: Router,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
  ) {
    iconSrv.addIcon(...ICONS);
    // this.testReuse();
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
    this.menuSrv.add(this.menus);
  }
}
