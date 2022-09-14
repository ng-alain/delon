import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChange,
  ViewEncapsulation
} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BooleanInput, InputBoolean } from '@delon/util/decorator';
import { WINDOW } from '@delon/util/token';

import { CellService } from './service';
import type { CellOptions, CellTextResult, CellWidgetData } from './types';

@Component({
  selector: '[cell]',
  template: `
    <ng-template #text>
      <ng-container [ngSwitch]="res?.type">
        <a
          *ngSwitchCase="'link'"
          (click)="_link($event)"
          [attr.target]="safeOpt.link?.target"
          [innerHTML]="_text"
          [attr.title]="truncate ? value : null"
        ></a>
        <nz-tag *ngSwitchCase="'tag'" [nzColor]="res?.result?.color">
          <span [innerHTML]="_text"></span>
        </nz-tag>
        <nz-badge *ngSwitchCase="'badge'" [nzStatus]="res?.result?.color" nzText="{{ _text }}"></nz-badge>
        <ng-template *ngSwitchCase="'widget'" cell-widget-host [data]="hostData"></ng-template>
        <ng-container *ngSwitchDefault>
          <span *ngIf="!isText" [innerHTML]="_text" [attr.title]="truncate ? value : null"></span>
          <span *ngIf="isText" [innerText]="_text" [attr.title]="truncate ? value : null"></span>
          <span *ngIf="_unit" class="unit">{{ _unit }}</span>
        </ng-container>
      </ng-container>
    </ng-template>
    <ng-template #textWrap>
      <ng-container *ngIf="showDefault">{{ default }}</ng-container>
      <ng-container *ngIf="!showDefault">
        <span *ngIf="safeOpt?.tooltip; else text" nz-tooltip [nzTooltipTitle]="safeOpt.tooltip">
          <ng-template [ngTemplateOutlet]="text"></ng-template>
        </span>
      </ng-container>
    </ng-template>
    <span *ngIf="loading; else textWrap" nz-icon nzType="loading"></span>
  `,
  host: {
    '[class.cell]': `true`,
    '[class.cell__default]': `showDefault`,
    '[class.cell__primary]': `type === 'primary'`,
    '[class.cell__success]': `type === 'success'`,
    '[class.cell__danger]': `type === 'danger'`,
    '[class.cell__warning]': `type === 'warning'`,
    '[class.cell__large]': `size === 'large'`,
    '[class.cell__small]': `size === 'small'`,
    '[class.cell__has-unit]': `_unit`
  },
  exportAs: 'cell',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class Cell implements OnChanges, OnDestroy {
  static ngAcceptInputType_truncate: BooleanInput;
  static ngAcceptInputType_loading: BooleanInput;

  private destroy$?: Subscription;

  _text!: string | SafeHtml;
  _unit?: string;
  res?: CellTextResult;
  showDefault = false;

  @Input() type?: 'primary' | 'success' | 'danger' | 'warning';
  @Input() size?: 'large' | 'small' | 'default';
  @Input() value?: unknown;
  @Input() default = '-';
  @Input() defaultCondition?: unknown = null;
  @Input() options?: CellOptions;
  @Input() @InputBoolean() truncate = false;
  @Input() @InputBoolean() loading = false;

  get safeOpt(): CellOptions {
    return this.res?.options!;
  }
  get isText(): boolean {
    return this.res?.safeHtml === 'text';
  }
  get hostData(): CellWidgetData {
    return {
      value: this.value,
      default: this.default,
      defaultCondition: this.defaultCondition,
      options: this.srv.fixOptions(this.options),
      truncate: this.truncate
    };
  }

  constructor(
    private srv: CellService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(WINDOW) private win: any
  ) {}

  ngOnChanges(changes: { [p in keyof Cell]?: SimpleChange }): void {
    if (changes.value) {
      this.destroy$?.unsubscribe();
      this.destroy$ = this.srv.get(this.value, this.options).subscribe(res => {
        this.res = res;
        this.showDefault = this.value == this.defaultCondition;
        this._text = res?.result.text ?? this.default ?? '';
        this._unit = res?.result?.unit;
        this.cdr.detectChanges();
      });
    }
  }

  private _stopPropagation(ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();
  }

  _link(e: Event): void {
    this._stopPropagation(e);
    const link = this.safeOpt.link;
    const url = link?.url;
    if (url == null) return;

    if (url.startsWith('/')) {
      this.router.navigateByUrl(url);
    } else {
      (this.win as Window).open(url, link?.target);
    }
  }

  ngOnDestroy(): void {
    this.destroy$?.unsubscribe();
  }
}
