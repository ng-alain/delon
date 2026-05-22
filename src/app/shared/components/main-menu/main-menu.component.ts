import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

import { MetaService } from '@core';

@Component({
  selector: 'main-menu',
  template: `
    <ul nz-menu nzMode="inline" class="aside-container">
      @for (group of meta.menus(); track $index) {
        <li nz-menu-group nzOpen [nzTitle]="group.title">
          <ul>
            @for (item of group.list; track $index) {
              @let meta = item;
              <li
                nz-menu-item
                (click)="to.emit(meta.url)"
                [routerLink]="item.url"
                [routerLinkActive]="['ant-menu-item-selected']"
                style="padding-left: 54px"
                [class.menu-deprecated]="meta.deprecated"
                nz-tooltip
                [nzTooltipTitle]="meta.deprecated ? 'Deprecated in ' + meta.deprecated : null"
              >
                <div class="flex-center-between">
                  <div>
                    <span class="name">{{ meta.title }}</span>
                    @if (meta.subtitle) {
                      <span class="chinese">{{ meta.subtitle }}</span>
                    }
                    @if (meta.lib) {
                      <nz-tag [nzColor]="'blue'" title="Full Library" class="ml-sm">LIB</nz-tag>
                    }
                  </div>
                  @if (meta.tag) {
                    <nz-tag nzColor="success">{{ meta.tag }}</nz-tag>
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
  protected readonly meta = inject(MetaService);

  readonly to = output<string>();
}
