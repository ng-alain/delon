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
import type { CellDefaultText, CellOptions, CellTextResult, CellValue, CellWidgetData } from './cell.types';

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
          [attr.title]="value"
          [innerHTML]="_text"
        ></a>
        <nz-tag *ngSwitchCase="'tag'" [nzColor]="res?.result?.color">
          <span [innerHTML]="_text"></span>
        </nz-tag>
        <nz-badge *ngSwitchCase="'badge'" [nzStatus]="res?.result?.color" nzText="{{ _text }}"></nz-badge>
        <ng-template *ngSwitchCase="'widget'" cell-widget-host [data]="hostData"></ng-template>
        <ng-container *ngSwitchCase="'img'">
          <img
            *ngFor="let i of _text"
            [attr.src]="i"
            [attr.height]="safeOpt.img?.size"
            [attr.width]="safeOpt.img?.size"
            (click)="_showImg(i)"
            class="img"
            [class.point]="safeOpt.img?.big"
          />
        </ng-container>
        <ng-container *ngSwitchDefault>
          <span *ngIf="!isText" [innerHTML]="_text" [attr.title]="value"></span>
          <span *ngIf="isText" [innerText]="_text" [attr.title]="value"></span>
          <span *ngIf="_unit" class="unit">{{ _unit }}</span>
        </ng-container>
      </ng-container>
    </ng-template>
    <ng-template #textWrap>
      <ng-container *ngIf="showDefault">{{ safeOpt.default?.text }}</ng-container>
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
  @Input() @InputBoolean() loading = false;
  @Input() @InputBoolean() disabled = false;

  get safeOpt(): CellOptions {
    return this.res?.options ?? {};
  }

  get isText(): boolean {
    return this.res?.safeHtml === 'text';
  }

  get hostData(): CellWidgetData {
    return {
      value: this.value,
      options: this.srv.fixOptions(this.options)
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
      this.showDefault = this.value == (this.safeOpt.default as CellDefaultText).condition;
      this._text = res.result?.text ?? '';
      this._unit = res.result?.unit ?? this.safeOpt?.unit;
      this.cdr.detectChanges();
      this.setClass();
    });
  }

  private setClass(): void {
    const { el, renderer } = this;
    const { renderType, size } = this.safeOpt;
    updateHostClass(el.nativeElement, renderer, {
      [`cell`]: true,
      [`cell__${renderType}`]: renderType != null,
      [`cell__${size}`]: size != null,
      [`cell__has-unit`]: this._unit,
      [`cell__has-default`]: this.showDefault,
      [`cell__disabled`]: this.disabled
    });
    el.nativeElement.dataset.type = this.safeOpt.type;
  }

  ngOnChanges(changes: { [p in keyof CellComponent]?: SimpleChange }): void {
    // Do not call updateValue when only updating loading, disabled
    if (Object.keys(changes).every(k => ['loading', 'disabled'].includes(k))) {
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
    if (config == null || config.big == null) return;

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
