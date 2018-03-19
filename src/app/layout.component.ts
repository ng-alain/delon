import { Component, OnInit } from '@angular/core';
import { MenuService, SettingsService, Menu } from '@delon/theme';

@Component({
  selector: 'app-layout',
  template: `
<div class="wrapper">
    <div class="header">
        <div class="logo">
            <a [routerLink]="['/']">
                <img class="expanded" src="./assets/img/logo-full.svg" alt="{{settings.app.name}}" style="max-height:40px;" />
                <img class="collapsed" src="./assets/img/logo.svg" alt="{{settings.app.name}}" style="max-height:30px;" />
            </a>
        </div>
        <div class="top-nav-wrap">
            <ul class="top-nav">
                <li>
                    <div class="item" (click)="toggleCollapsedSideabar()">
                        <i class="anticon anticon-menu-{{settings.layout.collapsed ? 'unfold' : 'fold'}}"></i>
                    </div>
                </li>
            </ul>
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
                {
                    text: 'Level1',
                    link: '/level',
                    icon: 'anticon anticon-appstore-o',
                    children: [
                        {
                            text: 'Level2',
                            link: '#',
                            children: [
                                { text: 'Level3', link: '#' },
                                { text: 'Level3', link: '#' }
                            ]
                        },
                        { text: 'Level2', link: '#' }
                    ]
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
        private menuSrv: MenuService,
        public settings: SettingsService
    ) {}

    toggleCollapsedSideabar() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }

    ngOnInit(): void {
        this.menuSrv.add(this.menus);
    }
}
