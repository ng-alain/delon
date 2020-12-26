import { DOCUMENT } from '@angular/common';
import { Location } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { LayoutDirection, SettingsService } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { delay, filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  template: `
    <div [dir]="direction">
      <app-header></app-header>
      <nz-spin *ngIf="isFetching" class="fetching" nzSpinning></nz-spin>
      <router-outlet></router-outlet>
      <nz-back-top></nz-back-top>
      <theme-btn></theme-btn>
    </div>
  `,
  host: {
    '[attr.id]': `'ng-content'`,
  },
})
export class LayoutComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  isFetching = false;
  direction: LayoutDirection = 'ltr';

  constructor(
    private router: Router,
    msg: NzMessageService,
    private route: ActivatedRoute,
    private settingsSrv: SettingsService,
    @Inject(DOCUMENT) doc: any,
    private location: Location,
  ) {
    this.direction = (route.snapshot.queryParams.direction || 'ltr') === 'rtl' ? 'rtl' : 'ltr';
    settingsSrv.notify
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(w => w.name === 'direction'),
      )
      .subscribe(res => {
        this.direction = res.value;
        const htmlEl = doc.querySelector('html') as HTMLElement;
        if (htmlEl) {
          htmlEl.dataset.direction = res.value;
          htmlEl.classList.remove('rtl', 'ltr');
          htmlEl.classList.add(res.value);
        }
        this.fixDirection();
      });
    settingsSrv.setLayout('direction', this.direction);
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
    const path = this.router.url.split('?')[0];
    let fragment = this.route.snapshot.fragment as string;
    if (fragment != null && fragment.length > 0) {
      fragment = `#${fragment}`;
    } else {
      fragment = '';
    }
    this.location.replaceState(path, (direction === 'rtl' ? `?direction=rtl` : '') + fragment);
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
