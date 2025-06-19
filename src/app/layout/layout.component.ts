import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, NavigationError, RouteConfigLoadStart, Router, RouterOutlet } from '@angular/router';
import { delay, filter } from 'rxjs';

import { RTL, RTLService, SettingsService } from '@delon/theme';
import { ThemeBtnComponent } from '@delon/theme/theme-btn';
import { NzFloatButtonTopComponent } from 'ng-zorro-antd/float-button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { AppService, SiteTheme } from '../core/app.service';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-layout',
  template: `
    @if (render) {
      <app-header />
      @if (isFetching) {
        <nz-spin class="fetching" nzSpinning />
      }
      <router-outlet />
      <nz-float-button-top />
      <theme-btn (themeChange)="themeChange($event)" />
    }
  `,
  host: {
    '[attr.id]': `'ng-content'`
  },
  imports: [RouterOutlet, HeaderComponent, NzSpinModule, NzFloatButtonTopComponent, ThemeBtnComponent]
})
export class LayoutComponent {
  isFetching = false;
  render = true;

  private readonly router = inject(Router);
  private readonly msg = inject(NzMessageService);
  private readonly settingsSrv = inject(SettingsService);
  private readonly location = inject(Location);
  private readonly rtl = inject(RTLService);
  private readonly appSrv = inject(AppService);

  constructor() {
    this.rtl.change.subscribe(() => this.fixDirection());
    this.router.events.pipe(takeUntilDestroyed()).subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
      }
      if (evt instanceof NavigationError) {
        this.isFetching = false;
        this.msg.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
        return;
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.isFetching = false;
    });
    this.router.events
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
