import { NgTemplateOutlet } from '@angular/common';
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
import { FormsModule } from '@angular/forms';
import type { SafeValue } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { updateHostClass } from '@delon/util/browser';
import { BooleanInput, InputBoolean } from '@delon/util/decorator';
import { WINDOW } from '@delon/util/token';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImage, NzImageService } from 'ng-zorro-antd/image';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { CellHostDirective } from './cell-host.directive';
import { CellService } from './cell.service';
import type { CellDefaultText, CellOptions, CellTextResult, CellValue, CellWidgetData } from './cell.types';

@Component({
  selector: 'cell, [cell]',
  template: `
    <ng-template #text>
      @switch(safeOpt.type) { @case('checkbox') {
      <label nz-radio [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
        {{ safeOpt.radio?.label }}
      </label>
      } @case('radio') {
      <label nz-radio [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
        {{ safeOpt.radio?.label }}
      </label>
      } @case('link') {
      <a (click)="_link($event)" [attr.target]="safeOpt.link?.target" [attr.title]="value" [innerHTML]="_text"></a>
      } @case('tag') {
      <nz-tag [nzColor]="res?.result?.color">
        <span [innerHTML]="_text"></span>
      </nz-tag>
      } @case('badge') {
      <nz-badge [nzStatus]="res?.result?.color" nzText="{{ _text }}" />
      } @case('widget') {
      <ng-template cell-widget-host [data]="hostData" />
      } @case('img') { @for (i of $any(_text); track $index) {
      <img
        [attr.src]="i"
        [attr.height]="safeOpt.img?.size"
        [attr.width]="safeOpt.img?.size"
        (click)="_showImg(i)"
        class="img"
        [class.point]="safeOpt.img?.big"
      />
      } } @default { @if(isText) {
      <span [innerText]="_text" [attr.title]="value"></span>
      } @else {
      <span [innerHTML]="_text" [attr.title]="value"></span>
      } @if(_unit) {
      <span class="unit">{{ _unit }}</span>
      } } }
    </ng-template>
    <ng-template #textWrap>
      @if (showDefault) {
      {{ safeOpt.default?.text }}
      } @else { @if (safeOpt.tooltip) {
      <span [nz-tooltip]="safeOpt.tooltip">
        <ng-template [ngTemplateOutlet]="text" />
      </span>
      } @else {
      <ng-template [ngTemplateOutlet]="text" />
      } }
    </ng-template>
    @if (loading) {
    <span nz-icon nzType="loading"></span>
    } @else {
    <ng-template [ngTemplateOutlet]="textWrap" />
    }
  `,
  exportAs: 'cell',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    FormsModule,
    NgTemplateOutlet,
    NzRadioModule,
    NzIconModule,
    NzTagModule,
    NzBadgeModule,
    NzToolTipModule,
    CellHostDirective
  ]
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
    const { renderType, size, type } = this.safeOpt;
    updateHostClass(el.nativeElement, renderer, {
      [`cell`]: true,
      [`cell__${renderType}`]: renderType != null,
      [`cell__${size}`]: size != null,
      [`cell__has-unit`]: this._unit,
      [`cell__has-default`]: this.showDefault,
      [`cell__disabled`]: this.disabled
    });
    el.nativeElement.setAttribute('data-type', `${type}`);
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
