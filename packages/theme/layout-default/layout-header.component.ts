import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy } from '@angular/core';
import { App, SettingsService } from '@delon/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutDefaultComponent } from './layout.component';
import { LayoutDefaultHeaderItemDirection, LayoutDefaultHeaderItemHidden, LayoutDefaultOptions } from './types';

interface LayoutDefaultHeaderItem {
  host: ElementRef;
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
    <div class="alain-default__header-logo">
      <a [routerLink]="['/']" class="alain-default__header-logo-link">
        <img class="alain-default__header-logo-expanded" [attr.src]="options.logoExpanded" [attr.alt]="app.name" style="max-height: 40px" />
        <img
          class="alain-default__header-logo-collapsed"
          [attr.src]="options.logoCollapsed"
          [attr.alt]="app.name"
          style="max-height: 30px"
        />
      </a>
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        <li>
          <div class="alain-default__nav-item" (click)="toggleCollapsed()">
            <i nz-icon [nzType]="collapsedIcon"></i>
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
    '[class.alain-default__header]': `true`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDefaultHeaderComponent implements AfterViewInit, OnDestroy {
  private destroy$ = new Subject<void>();

  left: LayoutDefaultHeaderItem[] = [];
  middle: LayoutDefaultHeaderItem[] = [];
  right: LayoutDefaultHeaderItem[] = [];

  get options(): LayoutDefaultOptions {
    return this.parent.options;
  }

  get app(): App {
    return this.settings.app;
  }

  get collapsed(): boolean {
    return this.settings.layout.collapsed;
  }

  get collapsedIcon(): string {
    let type = this.collapsed ? 'unfold' : 'fold';
    if (this.settings.layout.direction === 'rtl') {
      type = this.collapsed ? 'fold' : 'unfold';
    }
    return `menu-${type}`;
  }

  constructor(private settings: SettingsService, private parent: LayoutDefaultComponent, private cdr: ChangeDetectorRef) {}

  private refresh(): void {
    const arr = this.parent.headerItems.toArray();
    this.left = arr.filter(i => i.direction === 'left');
    this.middle = arr.filter(i => i.direction === 'middle');
    this.right = arr.filter(i => i.direction === 'right');
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.parent.headerItems.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.refresh());
    this.refresh();
  }

  toggleCollapsed(): void {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
