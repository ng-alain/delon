import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
    '[attr.id]': `'angular-content'`,
  },
})
export class LayoutComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  isFetching = false;

  constructor(router: Router, msg: NzMessageService) {
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
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
