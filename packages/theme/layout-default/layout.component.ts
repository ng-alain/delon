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
import { combineLatest, Subject, takeUntil } from 'rxjs';

import { SettingsService } from '@delon/theme';
import { updateHostClass } from '@delon/util/browser';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultService } from './layout.service';
import { LayoutDefaultOptions } from './types';

@Component({
  selector: 'layout-default',
  exportAs: 'layoutDefault',
  template: `
    <div class="alain-default__progress-bar" *ngIf="isFetching"></div>
    <layout-default-header *ngIf="!_opt.hideHeader" [options]="_opt" [items]="headerItems"></layout-default-header>
    <div *ngIf="!_opt.hideAside" class="alain-default__aside">
      <div class="alain-default__aside-wrap">
        <div class="alain-default__aside-inner">
          <ng-container *ngTemplateOutlet="asideUser"></ng-container>
          <ng-container *ngTemplateOutlet="nav"></ng-container>
          <layout-default-nav *ngIf="!nav"></layout-default-nav>
        </div>
        <div *ngIf="_opt.showSiderCollapse" class="alain-default__aside-link">
          <div class="alain-default__aside-link-collapsed" (click)="toggleCollapsed()">
            <span nz-icon [nzType]="collapsedIcon"></span>
          </div>
          <ng-container *ngTemplateOutlet="asideLink"></ng-container>
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
  @ContentChildren(LayoutDefaultHeaderItemComponent, { descendants: false })
  headerItems!: QueryList<LayoutDefaultHeaderItemComponent>;

  _opt!: LayoutDefaultOptions;

  @Input()
  set options(value: LayoutDefaultOptions | null | undefined) {
    this.srv.setOptions(value);
  }
  @Input() asideUser: TemplateRef<void> | null = null;
  @Input() asideLink: TemplateRef<void> | null = null;
  @Input() nav: TemplateRef<void> | null = null;
  @Input() content: TemplateRef<void> | null = null;
  @Input() customError?: string | null;

  private destroy$ = new Subject<void>();
  isFetching = false;

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
    router.events.pipe(takeUntil(this.destroy$)).subscribe(ev => this.processEv(ev));

    const { destroy$ } = this;
    combineLatest([this.srv.options$, settings.notify])
      .pipe(takeUntil(destroy$))
      .subscribe(([options]) => {
        this._opt = options;
        this.setClass();
      });
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
      [`alain-default__hide-aside`]: this._opt!.hideAside,
      [`alain-default__hide-header`]: this._opt!.hideHeader
    });

    doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
