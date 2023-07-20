import { DOCUMENT } from '@angular/common';
import {
  Component,
  ContentChildren,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  QueryList,
  Renderer2,
  TemplateRef
} from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  Event
} from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

import { SettingsService } from '@delon/theme';
import { updateHostClass } from '@delon/util/browser';
import { BooleanInput, InputBoolean } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultService } from './layout.service';
import { LayoutDefaultOptions } from './types';

@Component({
  selector: 'layout-default',
  exportAs: 'layoutDefault',
  template: `
    <div class="alain-default__progress-bar" *ngIf="showFetching"></div>
    <layout-default-header *ngIf="!opt.hideHeader" [items]="headerItems"></layout-default-header>
    <div *ngIf="!opt.hideAside" class="alain-default__aside">
      <div class="alain-default__aside-wrap">
        <div class="alain-default__aside-inner">
          <ng-container *ngTemplateOutlet="asideUser"></ng-container>
          <ng-container *ngTemplateOutlet="nav"></ng-container>
          <layout-default-nav *ngIf="!nav"></layout-default-nav>
        </div>
        <div *ngIf="opt.showSiderCollapse" class="alain-default__aside-link">
          <ng-container *ngIf="asideBottom === null; else asideBottom">
            <div class="alain-default__aside-link-collapsed" (click)="toggleCollapsed()">
              <span nz-icon [nzType]="collapsedIcon"></span>
            </div>
          </ng-container>
        </div>
      </div>
    </div>
    <section class="alain-default__content">
      <ng-container *ngTemplateOutlet="content"></ng-container>
      <ng-content></ng-content>
    </section>
  `
})
export class LayoutDefaultComponent implements OnDestroy {
  static ngAcceptInputType_fetchingStrictly: BooleanInput;
  static ngAcceptInputType_fetching: BooleanInput;

  @ContentChildren(LayoutDefaultHeaderItemComponent, { descendants: false })
  headerItems!: QueryList<LayoutDefaultHeaderItemComponent>;

  get opt(): LayoutDefaultOptions {
    return this.srv.options;
  }

  @Input()
  set options(value: LayoutDefaultOptions | null | undefined) {
    this.srv.setOptions(value);
  }
  @Input() asideUser: TemplateRef<void> | null = null;
  @Input() asideBottom: TemplateRef<NzSafeAny> | null = null;
  @Input() nav: TemplateRef<void> | null = null;
  @Input() content: TemplateRef<void> | null = null;
  @Input() customError?: string | null;
  @Input() @InputBoolean() fetchingStrictly = false;
  @Input() @InputBoolean() fetching = false;

  private destroy$ = new Subject<void>();
  private isFetching = false;

  get showFetching(): boolean {
    if (this.fetchingStrictly) return this.fetching;
    return this.isFetching;
  }

  get collapsed(): boolean {
    return this.settings.layout.collapsed;
  }

  get collapsedIcon(): string {
    return this.srv.collapsedIcon;
  }

  toggleCollapsed(): void {
    this.srv.toggleCollapsed();
  }

  constructor(
    router: Router,
    private msgSrv: NzMessageService,
    private settings: SettingsService,
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private doc: NzSafeAny,
    private srv: LayoutDefaultService
  ) {
    const { destroy$ } = this;
    router.events
      .pipe(
        takeUntil(destroy$),
        filter(() => !this.fetchingStrictly)
      )
      .subscribe(ev => this.processEv(ev));
    this.srv.options$.pipe(takeUntil(destroy$)).subscribe(() => this.setClass());
    this.settings.notify.pipe(takeUntil(destroy$)).subscribe(() => this.setClass());
  }

  processEv(ev: Event): void {
    if (!this.isFetching && ev instanceof RouteConfigLoadStart) {
      this.isFetching = true;
    }
    if (ev instanceof NavigationError || ev instanceof NavigationCancel) {
      this.isFetching = false;
      const err = this.customError === null ? null : this.customError ?? `Could not load ${ev.url} route`;
      if (err && ev instanceof NavigationError) {
        this.msgSrv.error(err, { nzDuration: 1000 * 3 });
      }
      return;
    }
    if (!(ev instanceof NavigationEnd || ev instanceof RouteConfigLoadEnd)) {
      return;
    }
    if (this.isFetching) {
      setTimeout(() => {
        this.isFetching = false;
      }, 100);
    }
  }

  private setClass(): void {
    const { el, doc, renderer, settings } = this;
    const layout = settings.layout;
    updateHostClass(el.nativeElement, renderer, {
      ['alain-default']: true,
      [`alain-default__fixed`]: layout.fixed,
      [`alain-default__collapsed`]: layout.collapsed,
      [`alain-default__hide-aside`]: this.opt.hideAside,
      [`alain-default__hide-header`]: this.opt.hideHeader
    });

    doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
