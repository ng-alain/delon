import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { MenuService, MOBILE } from '@core';

import { FooterComponent } from '../footer/footer.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-content',
  template: `
    <div nz-row>
      @if (!mobile()) {
        <div nz-col nzXs="24" nzSm="24" nzMd="6" nzLg="6" nzXl="5" nzXXl="4" class="main-menu">
          <nz-affix>
            <main-menu (to)="opened.set(false)" class="main-menu-inner" />
          </nz-affix>
        </div>
      }
      <div nz-col nzXs="24" nzSm="24" nzMd="18" nzLg="18" nzXl="19" nzXXl="20">
        <div class="main-container">
          <router-outlet />
        </div>
        @let np = prevNext();
        @let next = np.next;
        @let prev = np.prev;
        @if (next || prev) {
          <div class="prev-next-nav">
            @if (prev) {
              <a class="prev-page" [routerLink]="prev.url">
                <nz-icon nzType="left" class="footer-nav-icon-before" />
                <span>{{ prev.title }}</span>
                <span class="chinese">{{ prev.subtitle }}</span>
              </a>
            }
            @if (next) {
              <a class="next-page" [routerLink]="next.url">
                <span>{{ next.title }}</span>
                <span class="chinese">{{ next.subtitle }}</span>
                <nz-icon nzType="right" class="footer-nav-icon-after" />
              </a>
            }
          </div>
        }
        <app-footer small />
      </div>
    </div>
    @if (mobile()) {
      <div class="drawer-wrapper">
        <div class="drawer drawer-left" [class.drawer-open]="opened()">
          <div class="drawer-mask" (click)="opened.set(!opened())"></div>
          <div class="drawer-content-wrapper">
            <div class="drawer-content">
              <main-menu (to)="opened.set(false)" />
            </div>
            <div class="drawer-button" (click)="opened.set(!opened())"><nz-icon nzType="menu-unfold" /></div>
          </div>
        </div>
      </div>
    }
  `,
  host: {
    class: 'main-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, FooterComponent, NzAffixModule, NzIconModule, MainMenuComponent, NzGridModule]
})
export class ContentComponent {
  readonly prevNext = inject(MenuService).prevNext;
  protected mobile = MOBILE;
  protected opened = signal(false);
}
