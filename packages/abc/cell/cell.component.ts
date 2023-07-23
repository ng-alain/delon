import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  Renderer2,
  SimpleChange,
  ViewEncapsulation
} from '@angular/core';
import type { SafeValue } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { updateHostClass } from '@delon/util/browser';
import { BooleanInput, InputBoolean } from '@delon/util/decorator';
import { WINDOW } from '@delon/util/token';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzImage, NzImageService } from 'ng-zorro-antd/image';

import { CellService } from './cell.service';
import type { CellOptions, CellSize, CellTextResult, CellType, CellValue, CellWidgetData } from './cell.types';

@Component({
  selector: 'cell, [cell]',
  template: `
    <ng-template #text>
      <ng-container [ngSwitch]="safeOpt.type">
        <label
          *ngSwitchCase="'checkbox'"
          nz-checkbox
          [nzDisabled]="disabled"
          [ngModel]="value"
          (ngModelChange)="change($event)"
        >
          {{ safeOpt.checkbox?.label }}
        </label>
        <label
          *ngSwitchCase="'radio'"
          nz-radio
          [nzDisabled]="disabled"
          [ngModel]="value"
          (ngModelChange)="change($event)"
        >
          {{ safeOpt.radio?.label }}
        </label>
        <a
          *ngSwitchCase="'link'"
          (click)="_link($event)"
          [attr.target]="safeOpt.link?.target"
          [attr.title]="truncate ? value : null"
          [innerHTML]="_text"
        ></a>
        <nz-tag *ngSwitchCase="'tag'" [nzColor]="res?.result?.color">
          <span [innerHTML]="_text"></span>
        </nz-tag>
        <nz-badge *ngSwitchCase="'badge'" [nzStatus]="res?.result?.color" nzText="{{ _text }}"></nz-badge>
        <ng-template *ngSwitchCase="'widget'" cell-widget-host [data]="hostData"></ng-template>
        <ng-container *ngSwitchCase="'img'">
          <img
            *ngFor="let i of $any(_text)"
            [attr.src]="i"
            [attr.height]="safeOpt.img?.size"
            [attr.width]="safeOpt.img?.size"
            (click)="_showImg(i)"
            class="img"
            [class.point]="safeOpt.img?.big"
          />
        </ng-container>
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
  exportAs: 'cell',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CellComponent implements OnChanges, OnDestroy {
  static ngAcceptInputType_truncate: BooleanInput;
  static ngAcceptInputType_loading: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;

  private destroy$?: Subscription;

  _text!: string | SafeValue | string[] | number;
  _unit?: string;
  res?: CellTextResult;
  showDefault = false;

  @Input() value?: CellValue;
  @Output() readonly valueChange = new EventEmitter<NzSafeAny>();
  @Input() options?: CellOptions;
  @Input() default = '-';
  @Input() defaultCondition?: unknown = null;
  @Input() type?: CellType | null;
  @Input() size?: CellSize | null;
  @Input() unit?: string;
  @Input() @InputBoolean() truncate = false;
  @Input() @InputBoolean() loading = false;
  @Input() @InputBoolean() disabled = false;

  /**
   * 货币快捷项
   *
   * @example
   * <cell [currency]="1000"></cell>
   * 等同于
   * <cell [value]="1000" [options]="{type: 'currency'}"></cell>
   */
  @Input()
  set currency(value: number) {
    this.value = value;
    this.options = { type: 'currency' };
    this.updateValue();
  }

  get safeOpt(): CellOptions {
    return this.res?.options ?? {};
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
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private imgSrv: NzImageService,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(WINDOW) private win: any
  ) {}

  private updateValue(): void {
    this.destroy$?.unsubscribe();
    this.destroy$ = this.srv.get(this.value, this.options).subscribe(res => {
      this.res = res;
      this.showDefault = this.value == this.defaultCondition;
      this._text = res.result?.text ?? '';
      this._unit = res.result?.unit ?? this.unit;
      this.cdr.detectChanges();
      this.setClass();
    });
  }

  private setClass(): void {
    const { el, renderer } = this;
    updateHostClass(el.nativeElement, renderer, {
      [`cell`]: true,
      [`cell__${this.type}`]: this.type != null,
      [`cell__${this.size}`]: this.size != null,
      [`cell__has-unit`]: this._unit,
      [`cell__has-default`]: this.showDefault,
      [`cell__disabled`]: this.disabled
    });
    el.nativeElement.dataset.type = this.safeOpt.type;
  }

  ngOnChanges(changes: { [p in keyof CellComponent]?: SimpleChange }): void {
    // Do not call updateValue when only updating loading, disabled, size
    if (Object.keys(changes).every(k => ['loading', 'disabled', 'size'].includes(k))) {
      this.setClass();
    } else {
      this.updateValue();
    }
  }

  change(value: NzSafeAny): void {
    this.value = value;
    this.valueChange.emit(value);
  }

  _link(e: Event): void {
    e.preventDefault();
    e.stopPropagation();

    if (this.disabled) return;

    const link = this.safeOpt.link;
    const url = link?.url;
    if (url == null) return;

    if (/https?:\/\//g.test(url)) {
      (this.win as Window).open(url, link?.target);
    } else {
      this.router.navigateByUrl(url);
    }
  }

  _showImg(img: string): void {
    const config = this.safeOpt.img;
    if (config == null || config.big !== true) return;

    let idx = -1;
    const list = (this._text as string[]).map((p, index) => {
      if (idx === -1 && p === img) idx = index;
      return typeof config.big === 'function' ? config.big(p) : p;
    });
    this.imgSrv
      .preview(
        list.map(p => ({ src: p }) as NzImage),
        config.previewOptions
      )
      .switchTo(idx);
  }

  ngOnDestroy(): void {
    this.destroy$?.unsubscribe();
  }
}
