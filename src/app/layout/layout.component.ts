import { Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { RTL, RTLService, SettingsService } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { delay, filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>
    <nz-spin *ngIf="isFetching" class="fetching" nzSpinning></nz-spin>
    <router-outlet></router-outlet>
    <nz-back-top></nz-back-top>
    <theme-btn></theme-btn>
  `,
  host: {
    '[attr.id]': `'ng-content'`,
  },
})
export class LayoutComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  isFetching = false;

  constructor(
    private router: Router,
    msg: NzMessageService,
    private settingsSrv: SettingsService,
    private location: Location,
    rtl: RTLService,
  ) {
    rtl.change.subscribe(() => this.fixDirection());
    router.events.pipe(takeUntil(this.unsubscribe$)).subscribe(evt => {
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
        takeUntil(this.unsubscribe$),
        filter(ev => ev instanceof NavigationEnd),
        delay(100),
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
    this.location.replaceState(path, (direction === RTL ? `?direction=` + RTL : '') + fragment);
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
