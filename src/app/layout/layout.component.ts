import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, NavigationError, RouteConfigLoadStart, Router, RouterOutlet } from '@angular/router';
import { delay, filter } from 'rxjs';

import { RTL, RTLService, SettingsService } from '@delon/theme';
import { ThemeBtnComponent } from '@delon/theme/theme-btn';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { HeaderComponent } from './header/header.component';
import { AppService, SiteTheme } from '../core/app.service';

@Component({
  selector: 'app-layout',
  template: `
    @if (render) {
      <app-header />
      @if (isFetching) {
        <nz-spin class="fetching" nzSpinning />
      }
      <router-outlet />
      <nz-back-top />
      <theme-btn (themeChange)="themeChange($event)" />
    }
  `,
  host: {
    '[attr.id]': `'ng-content'`
  },
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NzSpinModule, NzBackTopModule, ThemeBtnComponent]
})
export class LayoutComponent {
  isFetching = false;
  render = true;

  constructor(
    private router: Router,
    msg: NzMessageService,
    private settingsSrv: SettingsService,
    private location: Location,
    rtl: RTLService,
    private appSrv: AppService
  ) {
    rtl.change.subscribe(() => this.fixDirection());
    router.events.pipe(takeUntilDestroyed()).subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
      }
      if (evt instanceof NavigationError) {
        this.isFetching = false;
        msg.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
        return;
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.isFetching = false;
    });
    router.events
      .pipe(
        takeUntilDestroyed(),
        filter(ev => ev instanceof NavigationEnd),
        delay(100)
      )
      .subscribe(() => {
        this.fixDirection();
      });
  }

  private fixDirection(): void {
    // 修正rtl的query状态
    const direction = this.settingsSrv.layout.direction;
    const path = this.router.url.split(/[?#|?|#]/)[0];
    const urlTree = this.router.parseUrl(this.router.url);
    let fragment = urlTree.fragment;
    if (fragment != null && fragment.length > 0) {
      fragment = `#${fragment}`;
    } else {
      fragment = '';
    }
    this.location.replaceState(path, (direction === RTL ? `?direction=${RTL}` : '') + fragment);
  }

  themeChange(theme: string): void {
    this.appSrv.setTheme(theme as SiteTheme);
  }
}
