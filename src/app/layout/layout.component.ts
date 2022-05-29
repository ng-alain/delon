import { Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { Subject, delay, filter, takeUntil } from 'rxjs';

import { RTL, RTLService, SettingsService } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

import { AppService, SiteTheme } from '../core/app.service';

@Component({
  selector: 'app-layout',
  template: `
    <ng-container *ngIf="render">
      <app-header></app-header>
      <nz-spin *ngIf="isFetching" class="fetching" nzSpinning></nz-spin>
      <router-outlet></router-outlet>
      <nz-back-top></nz-back-top>
      <theme-btn (themeChange)="themeChange($event)"></theme-btn>
    </ng-container>
  `,
  host: {
    '[attr.id]': `'ng-content'`
  }
})
export class LayoutComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
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
    router.events.pipe(takeUntil(this.destroy$)).subscribe(evt => {
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
        takeUntil(this.destroy$),
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

  ngOnDestroy(): void {
    const { destroy$ } = this;
    destroy$.next();
    destroy$.complete();
  }
}
