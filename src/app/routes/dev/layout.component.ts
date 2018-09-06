import { Component, OnInit, HostBinding } from '@angular/core';
import { MenuService, SettingsService, Menu } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'dev-layout',
  templateUrl: './layout.component.html',
  host: {
    '[class.alain-default]': 'true',
  },
  preserveWhitespaces: false
})
export class DevLayoutComponent implements OnInit {
  @HostBinding('class.layout-fixed')
  get isFixed() {
    return this.settings.layout.fixed;
  }
  @HostBinding('class.layout-boxed')
  get isBoxed() {
    return this.settings.layout.boxed;
  }
  @HostBinding('class.aside-collapsed')
  get isCollapsed() {
    return this.settings.layout.collapsed;
  }

  menus: Menu[] = [
    {
      text: 'test',
      group: true,
      children: [
        {
          text: 'Dashboard',
          link: '/',
          icon: 'anticon anticon-appstore-o',
          badge: 5,
        },
        {
          text: 'Level1',
          link: '#',
          icon: 'anticon anticon-appstore-o',
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
            { text: 'Reuse Tab7', link: '/dev/l1' },
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
    private menuSrv: MenuService,
    public settings: SettingsService,
    public msgSrv: NzMessageService,
  ) {}

  toggleCollapsedSideabar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  ngOnInit(): void {
    this.menuSrv.add(this.menus);
  }
}
