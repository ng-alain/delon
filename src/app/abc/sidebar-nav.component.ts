import { Component, OnInit } from '@angular/core';
import { MenuService, SettingsService } from '@delon/theme';

@Component({
  selector: 'app-demo',
  template: `
  <div class="aside">
    <div class="aside-inner">
        <sidebar-nav></sidebar-nav>
    </div>
  </div>
  <div style="height: 1000px"></div>
  `
})
export class DemoComponent implements OnInit {
    constructor(
        private menuSrv: MenuService,
        private settings: SettingsService
    ) {}

    ngOnInit(): void {
        document.querySelector('app-root').classList.add('aside-collapsed');
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
        this.menuSrv.add(Array(10).fill({}).map((g: any, gIdx: number) => {
            return {
                text: 'component',
                group: true,
                children: [
                    {
                        text: `menu ${gIdx}`,
                        icon: 'anticon anticon-meh-o',
                        children: Array(10).fill({}).map((i: any, idx: number) => {
                            return { text: `sub menu ${idx}`, link: '/m/1' };
                        })
                    }
                ]
            };
        }));
    }
}
