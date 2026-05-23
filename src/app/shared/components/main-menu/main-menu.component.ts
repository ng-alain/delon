import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

import { MenuService } from '@core';

@Component({
  selector: 'main-menu',
  template: `
    <ul nz-menu nzMode="inline" class="aside-container">
      @for (m of menus(); track $index) {
        <li nz-menu-group nzOpen [nzTitle]="m.name">
          <ul>
            @for (item of m.items; track $index) {
              <li
                nz-menu-item
                (click)="to.emit(item.url ?? '')"
                [routerLink]="item.url"
                [routerLinkActive]="['ant-menu-item-selected']"
                style="padding-left: 54px"
                [class.menu-deprecated]="item.deprecated"
                nz-tooltip
                [nzTooltipTitle]="item.deprecated ? 'Deprecated in ' + item.deprecated : null"
              >
                <div class="flex-center-between">
                  <div>
                    <span class="name">{{ item.title }}</span>
                    @if (item.subtitle) {
                      <span class="chinese">{{ item.subtitle }}</span>
                    }
                    @if (item.lib) {
                      <nz-tag [nzColor]="'blue'" title="Full Library" class="ml-sm">LIB</nz-tag>
                    }
                  </div>
                  @if (item.tag) {
                    <nz-tag nzColor="success">{{ item.tag }}</nz-tag>
                  }
                </div>
              </li>
            }
          </ul>
        </li>
      }
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, NzTooltipModule, NzTagModule, NzMenuModule]
})
export class MainMenuComponent {
  protected readonly menus = inject(MenuService).menus;
  readonly to = output<string>();
}
