import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { ALAIN_I18N_TOKEN, Menu, MenuService, SettingsService } from '@delon/theme';
import { NzIconService, NzMessageService } from 'ng-zorro-antd';

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
import { I18NService, LangType } from 'app/core/i18n/service';

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
  templateUrl: './layout.component.html',
  host: {
    '[class.alain-default]': 'true',
  },
  preserveWhitespaces: false,
})
export class DevLayoutComponent implements OnInit {
  @HostBinding('class.alain-default__fixed')
  get isFixed() {
    return this.settings.layout.fixed;
  }
  @HostBinding('class.alain-default__boxed')
  get isBoxed() {
    return this.settings.layout.boxed;
  }
  @HostBinding('class.alain-default__collapsed')
  get isCollapsed() {
    return this.settings.layout.collapsed;
  }

  lang: LangType = 'zh-CN';

  menus: Menu[] = [
    {
      text: 'test',
      group: true,
      children: [
        {
          text: 'Dashboard',
          link: '/dev',
          icon: 'anticon anticon-dashboard',
          i18n: 'app.header.menu.home',
          badge: 5,
        },
        {
          text: 'Level1',
          link: '#',
          icon: 'anticon anticon-appstore',
          children: [
            {
              text: 'Level2',
              link: '#',
              children: [
                { text: 'Level3', link: '/dev/l1' },
                { text: 'Level3', link: '/dev/l1' },
              ],
            },
            { text: 'Level2', link: '/dev/l2' },
          ],
        },
        {
          text: 'ABC',
          icon: 'anticon anticon-appstore',
          children: [
            { text: 'Reuse Tab7', link: '/dev/l1', i18n: 'app.header.menu.docs' },
            { text: 'Reuse Tab6', link: '/dev/l2' },
            { text: 'Reuse Tab5', link: '/dev/l3' },
            { text: 'Reuse Tab4', link: '/dev/l4' },
            { text: 'Reuse Tab3', link: '/dev/l5' },
            { text: 'Reuse Tab2', link: '/dev/l6' },
            { text: 'Reuse Tab1', link: '/dev/l7' },
            { text: 'Ellipsis', link: '/dev/l8' },
          ],
        },
      ],
    },
  ];

  constructor(
    iconSrv: NzIconService,
    private menuSrv: MenuService,
    public settings: SettingsService,
    public msgSrv: NzMessageService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,

  ) {
    iconSrv.addIcon(...ICONS);
  }

  toggleCollapsedSideabar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  toggleLang() {
    this.lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
    this.i18n.use(this.lang);
  }

  ngOnInit(): void {
    this.menuSrv.add(this.menus);
  }
}
