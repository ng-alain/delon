import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Input,
  QueryList,
  TemplateRef,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
      @for (i of ls; track $index) {
        <li [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
          <ng-container *ngTemplateOutlet="i.host" />
        </li>
      }
    </ng-template>
    <div class="alain-default__header-logo" [style.width.px]="opt.logoFixWidth">
      @if (opt.logo) {
        <ng-container *ngTemplateOutlet="opt.logo" />
      } @else {
        <a [routerLink]="opt.logoLink" class="alain-default__header-logo-link">
          <img class="alain-default__header-logo-expanded" [attr.src]="opt.logoExpanded" [attr.alt]="app.name" />
          <img class="alain-default__header-logo-collapsed" [attr.src]="opt.logoCollapsed" [attr.alt]="app.name" />
        </a>
      }
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        @if (!opt.hideAside && opt.showHeaderCollapse) {
          <li>
            <div class="alain-default__nav-item alain-default__nav-item--collapse" (click)="toggleCollapsed()">
              <nz-icon [nzType]="collapsedIcon" />
            </div>
          </li>
        }
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left }" />
      </ul>
      @if (middle.length > 0) {
        <div class="alain-default__nav alain-default__nav-middle">
          <ng-container *ngTemplateOutlet="middle[0].host" />
        </div>
      }
      <ul class="alain-default__nav">
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: right }" />
      </ul>
    </div>
  `,
  host: {
    '[class.alain-default__header]': `true`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class LayoutDefaultHeaderComponent implements AfterViewInit {
  private readonly settings = inject(SettingsService);
  private readonly srv = inject(LayoutDefaultService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroy$ = inject(DestroyRef);

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

  private refresh(): void {
    const arr = this.items.toArray();
    this.left = arr.filter(i => i.direction === 'left');
    this.middle = arr.filter(i => i.direction === 'middle');
    this.right = arr.filter(i => i.direction === 'right');
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.items.changes.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => this.refresh());
    this.srv.options$.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => this.cdr.detectChanges());
    this.refresh();
  }

  toggleCollapsed(): void {
    this.srv.toggleCollapsed();
  }
}
