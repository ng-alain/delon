import { Component, OnInit, HostBinding } from '@angular/core';
import { Menu, MenuService, SettingsService } from '@delon/theme';

@Component({
    selector: 'theme-layout',
    templateUrl: './layout.component.html'
})
export class ThemeLayoutComponent implements OnInit {

    @HostBinding('class.layout-fixed') get isFixed() { return this.settings.layout.fixed; }
    @HostBinding('class.layout-boxed') get isBoxed() { return this.settings.layout.boxed; }
    @HostBinding('class.aside-collapsed') get isCollapsed() { return this.settings.layout.collapsed; }

    menus: Menu[] = [
        {
            text: 'test',
            group: true,
            children: [
                {
                    text: 'Mock',
                    link: '/theme/demo',
                    icon: 'anticon anticon-appstore-o'
                },
                {
                    text: 'Level1',
                    icon: 'anticon anticon-appstore-o',
                    children: [
                        {
                            text: 'Level2',
                            children: [
                                { text: 'Level3', link: '/theme/demo' },
                                { text: 'Level3', link: '/theme/demo' }
                            ]
                        },
                        { text: 'Level2', link: '/theme/demo' }
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
