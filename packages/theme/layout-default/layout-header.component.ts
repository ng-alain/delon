import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  QueryList,
  TemplateRef
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { App, SettingsService } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultService } from './layout.service';
import { LayoutDefaultHeaderItemDirection, LayoutDefaultHeaderItemHidden, LayoutDefaultOptions } from './types';

interface LayoutDefaultHeaderItem {
  host: TemplateRef<NzSafeAny>;
  hidden?: LayoutDefaultHeaderItemHidden;
  direction?: LayoutDefaultHeaderItemDirection;
}

@Component({
  selector: 'layout-default-header',
  template: `
    <ng-template #render let-ls>
      <li *ngFor="let i of ls" [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
        <ng-container *ngTemplateOutlet="i.host"></ng-container>
      </li>
    </ng-template>
    <div class="alain-default__header-logo" [style.width.px]="opt.logoFixWidth">
      <ng-container *ngIf="!opt.logo; else opt.logo!">
        <a [routerLink]="opt.logoLink" class="alain-default__header-logo-link">
          <img class="alain-default__header-logo-expanded" [attr.src]="opt.logoExpanded" [attr.alt]="app.name" />
          <img class="alain-default__header-logo-collapsed" [attr.src]="opt.logoCollapsed" [attr.alt]="app.name" />
        </a>
      </ng-container>
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        <li *ngIf="!opt.hideAside && opt.showHeaderCollapse">
          <div class="alain-default__nav-item alain-default__nav-item--collapse" (click)="toggleCollapsed()">
            <span nz-icon [nzType]="collapsedIcon"></span>
          </div>
        </li>
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left }"></ng-template>
      </ul>
      <div *ngIf="middle.length > 0" class="alain-default__nav alain-default__nav-middle">
        <ng-container *ngTemplateOutlet="middle[0].host"></ng-container>
      </div>
      <ul class="alain-default__nav">
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: right }"></ng-template>
      </ul>
    </div>
  `,
  host: {
    '[class.alain-default__header]': `true`
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutDefaultHeaderComponent implements AfterViewInit, OnDestroy {
  private destroy$ = new Subject<void>();

  @Input() items!: QueryList<LayoutDefaultHeaderItemComponent>;

  left: LayoutDefaultHeaderItem[] = [];
  middle: LayoutDefaultHeaderItem[] = [];
  right: LayoutDefaultHeaderItem[] = [];

  get opt(): LayoutDefaultOptions {
    return this.srv.options;
  }

  get app(): App {
    return this.settings.app;
  }

  get collapsed(): boolean {
    return this.settings.layout.collapsed;
  }

  get collapsedIcon(): string {
    return this.srv.collapsedIcon;
  }

  constructor(private srv: LayoutDefaultService, private settings: SettingsService, private cdr: ChangeDetectorRef) {}

  private refresh(): void {
    const arr = this.items.toArray();
    this.left = arr.filter(i => i.direction === 'left');
    this.middle = arr.filter(i => i.direction === 'middle');
    this.right = arr.filter(i => i.direction === 'right');
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.items.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.refresh());
    this.srv.options$.pipe(takeUntil(this.destroy$)).subscribe(() => this.cdr.detectChanges());
    this.refresh();
  }

  toggleCollapsed(): void {
    this.srv.toggleCollapsed();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
