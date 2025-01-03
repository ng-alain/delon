import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  Renderer2,
  SimpleChange,
  ViewEncapsulation,
  booleanAttribute,
  inject
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { SafeValue } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { updateHostClass } from '@delon/util/browser';
import { WINDOW } from '@delon/util/token';
import { NzBadgeComponent } from 'ng-zorro-antd/badge';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzImage, NzImageModule, NzImageService } from 'ng-zorro-antd/image';
import { NzRadioComponent } from 'ng-zorro-antd/radio';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

import { CellHostDirective } from './cell-host.directive';
import { CellService } from './cell.service';
import type { CellDefaultText, CellOptions, CellTextResult, CellValue } from './cell.types';

@Component({
  selector: 'cell, [cell]',
  template: `
    <ng-template #text>
      @switch (safeOpt.type) {
        @case ('checkbox') {
          <label nz-checkbox [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
            {{ safeOpt.checkbox?.label }}
          </label>
        }
        @case ('radio') {
          <label nz-radio [nzDisabled]="disabled" [ngModel]="value" (ngModelChange)="change($event)">
            {{ safeOpt.radio?.label }}
          </label>
        }
        @case ('link') {
          <a (click)="_link($event)" [attr.target]="safeOpt.link?.target" [attr.title]="value" [innerHTML]="_text"></a>
        }
        @case ('tag') {
          <nz-tag [nzColor]="res?.result?.color">
            <span [innerHTML]="_text"></span>
          </nz-tag>
        }
        @case ('badge') {
          <nz-badge [nzStatus]="res?.result?.color" nzText="{{ _text }}" />
        }
        @case ('widget') {
          @if (res) {
            <ng-template cell-widget-host [data]="res" />
          }
        }
        @case ('img') {
          @for (i of $any(_text); track $index) {
            @let img = safeOpt.img;
            <img
              [attr.src]="i"
              [attr.height]="img?.size"
              [attr.width]="img?.size"
              (click)="_showImg(i)"
              class="img"
              [class.point]="img?.big"
            />
          }
        }
        @default {
          @if (isText) {
            <span [innerText]="_text" [attr.title]="value"></span>
          } @else {
            <span [innerHTML]="_text" [attr.title]="value"></span>
          }
          @if (_unit) {
            <span class="unit">{{ _unit }}</span>
          }
        }
      }
    </ng-template>
    <ng-template #textWrap>
      @if (showDefault) {
        {{ safeOpt.default?.text }}
      } @else {
        @if (safeOpt.tooltip) {
          <span [nz-tooltip]="safeOpt.tooltip">
            <ng-template [ngTemplateOutlet]="text" />
          </span>
        } @else {
          <ng-template [ngTemplateOutlet]="text" />
        }
      }
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
  imports: [
    FormsModule,
    NgTemplateOutlet,
    NzCheckboxComponent,
    NzRadioComponent,
    NzIconDirective,
    NzTagComponent,
    NzBadgeComponent,
    NzTooltipDirective,
    NzImageModule,
    CellHostDirective
  ]
})
export class CellComponent implements OnChanges, OnDestroy {
  private readonly srv = inject(CellService);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly renderer = inject(Renderer2);
  private readonly imgSrv = inject(NzImageService);
  private readonly win = inject(WINDOW);
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;

  private destroy$?: Subscription;

  _text!: string | SafeValue | string[] | number;
  _unit?: string;
  res?: CellTextResult;
  showDefault = false;

  @Input() value?: CellValue;
  @Output() readonly valueChange = new EventEmitter<NzSafeAny>();
  @Input() options?: CellOptions;
  @Input({ transform: booleanAttribute }) loading = false;
  @Input({ transform: booleanAttribute }) disabled = false;

  get safeOpt(): CellOptions {
    return this.res?.options ?? {};
  }

  get isText(): boolean {
    return this.res?.safeHtml === 'text';
  }

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
    updateHostClass(el, renderer, {
      [`cell`]: true,
      [`cell__${renderType}`]: renderType != null,
      [`cell__${size}`]: size != null,
      [`cell__has-unit`]: this._unit,
      [`cell__has-default`]: this.showDefault,
      [`cell__disabled`]: this.disabled
    });
    el.setAttribute('data-type', `${type}`);
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
      this.win.open(url, link?.target);
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
