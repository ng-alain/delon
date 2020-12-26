import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { LayoutDirection, SettingsService } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

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

  constructor(router: Router, msg: NzMessageService, route: ActivatedRoute, settingsSrv: SettingsService, @Inject(DOCUMENT) doc: any) {
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
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
