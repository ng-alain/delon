import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  Renderer2,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
  model,
  signal
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import type { SafeValue } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { combineLatest, Subscription, take } from 'rxjs';

import { updateHostClass } from '@delon/util/browser';
import { WINDOW } from '@delon/util/token';
import { NzBadgeComponent } from 'ng-zorro-antd/badge';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
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
      @let res = _res();
      @let text = _text();
      @switch (safeOpt.type) {
        @case ('checkbox') {
          <label nz-checkbox [nzDisabled]="disabled()" [ngModel]="value()" (ngModelChange)="value.set($event)">
            {{ safeOpt.checkbox?.label }}
          </label>
        }
        @case ('radio') {
          <label nz-radio [nzDisabled]="disabled()" [ngModel]="value()" (ngModelChange)="value.set($event)">
            {{ safeOpt.radio?.label }}
          </label>
        }
        @case ('link') {
          <a (click)="_link($event)" [attr.target]="safeOpt.link?.target" [attr.title]="value()" [innerHTML]="text"></a>
        }
        @case ('tag') {
          <nz-tag [nzColor]="res?.result?.color">
            <span [innerHTML]="text"></span>
          </nz-tag>
        }
        @case ('badge') {
          <nz-badge [nzStatus]="res?.result?.color" nzText="{{ text }}" />
        }
        @case ('widget') {
          @if (res) {
            <ng-template cell-widget-host [data]="res" />
          }
        }
        @case ('img') {
          @for (i of $any(text); track $index) {
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
          @if (isText()) {
            <span [innerText]="text" [attr.title]="value()"></span>
          } @else {
            <span [innerHTML]="text" [attr.title]="value()"></span>
          }
          @if (_unit()) {
            <span class="unit">{{ _unit() }}</span>
          }
        }
      }
    </ng-template>
    <ng-template #textWrap>
      @if (showDefault()) {
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
    @if (loading()) {
      <nz-icon nzType="loading" />
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
export class CellComponent implements OnDestroy {
  private readonly srv = inject(CellService);
  private readonly router = inject(Router);
  private readonly renderer = inject(Renderer2);
  private readonly imgSrv = inject(NzImageService);
  private readonly win = inject(WINDOW);
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;

  private destroy$?: Subscription;

  _text = signal<string | SafeValue | string[] | number>('');
  _unit = signal<string | undefined>(undefined);
  _res = signal<CellTextResult | undefined>(undefined);
  showDefault = computed(() => this.value() == (this.safeOpt.default as CellDefaultText)?.condition);

  value = model<CellValue>();
  options = input<CellOptions>();
  loading = input(false, { transform: booleanAttribute });
  disabled = input(false, { transform: booleanAttribute });

  get safeOpt(): CellOptions {
    return this._res()?.options ?? {};
  }

  isText = computed(() => this._res()?.safeHtml === 'text');

  constructor() {
    combineLatest([toObservable(this.loading), toObservable(this.disabled)])
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.setClass());

    effect(() => {
      const v = this.value();
      const o = this.options();
      this.destroy$?.unsubscribe();
      this.destroy$ = this.srv
        .get(v, o)
        .pipe(take(1))
        .subscribe(res => {
          this._res.set(res);
          this._text.set(res.result?.text ?? '');
          this._unit.set(res.result?.unit ?? this.safeOpt?.unit);
          this.setClass();
        });
    });
  }

  private setClass(): void {
    const { el, renderer } = this;
    const { renderType, size, type } = this.safeOpt;
    updateHostClass(el, renderer, {
      [`cell`]: true,
      [`cell__${renderType}`]: renderType != null,
      [`cell__${size}`]: size != null,
      [`cell__has-unit`]: this._unit(),
      [`cell__has-default`]: this.showDefault(),
      [`cell__disabled`]: this.disabled()
    });
    el.setAttribute('data-type', `${type}`);
  }

  _link(e: Event): void {
    e.preventDefault();
    e.stopPropagation();

    if (this.disabled()) return;

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
    const list = (this._text() as string[]).map((p, index) => {
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
