import { Component, OnInit } from '@angular/core';
import { MenuService, SettingsService, Menu } from '@delon/theme';

@Component({
  selector: 'app-layout',
  template: `
<div class="wrapper">
    <div class="header">
        <div class="item" (click)="toggleCollapsedSideabar()">
            <i class="anticon anticon-menu-{{settings.layout.collapsed ? 'unfold' : 'fold'}}"></i>
        </div>
    </div>
    <div class="aside">
        <div class="aside-inner">
            <sidebar-nav></sidebar-nav>
        </div>
    </div>
    <section class="content">
        <reuse-tab></reuse-tab>
        <router-outlet></router-outlet>
    </section>
</div>
`
})
export class LayoutComponent implements OnInit {

    menus: Menu[] = [
        {
            text: 'test',
            group: true,
            children: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                    icon: 'anticon anticon-appstore-o'
                },
                { text: 'table', link: '/abc/table' },
                { text: 'Reuse Tab', link: '/abc/reuse-tab' },
                { text: 'Ellipsis', link: '/abc/ellipsis' },
                { text: 'JWT', link: '/acl/jwt' },
                { text: 'ueditor', link: '/editor/ueditor' },
                { text: 'tinymce', link: '/editor/tinymce' },
                {
                    text: 'ABC',
                    icon: 'anticon anticon-appstore',
                    children: [
                        { text: 'Reuse Tab', link: '/abc/reuse-tab' },
                        { text: 'Ellipsis', link: '/abc/ellipsis' }
                    ]
                },
                {
                    text: 'ACL',
                    icon: 'anticon anticon-save',
                    children: [
                        { text: 'JWT', link: '/acl/jwt' }
                    ]
                }
            ]
        }
    ];

    constructor(
        public menuSrv: MenuService,
        public settings: SettingsService
    ) {}

    toggleCollapsedSideabar() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }

    ngOnInit(): void {
        this.menuSrv.add(this.menus);
    }
}
