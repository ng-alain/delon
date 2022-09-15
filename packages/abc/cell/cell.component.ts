import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Renderer2,
  SimpleChange,
  ViewEncapsulation
} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { updateHostClass } from '@delon/util/browser';
import { BooleanInput, InputBoolean } from '@delon/util/decorator';
import { WINDOW } from '@delon/util/token';
import { NzImage, NzImageService } from 'ng-zorro-antd/image';

import { CellService } from './cell.service';
import type { CellOptions, CellTextResult, CellWidgetData } from './cell.types';

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

  private destroy$?: Subscription;

  _text!: string | SafeHtml;
  _unit?: string;
  res?: CellTextResult;
  showDefault = false;

  @Input() value?: unknown;
  @Input() default = '-';
  @Input() defaultCondition?: unknown = null;
  @Input() options?: CellOptions;
  @Input() @InputBoolean() truncate = false;
  @Input() @InputBoolean() loading = false;
  @Input() type?: 'primary' | 'success' | 'danger' | 'warning';
  @Input() size?: 'large' | 'small';

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
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private imgSrv: NzImageService,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(WINDOW) private win: any
  ) {}

  private setClass(): void {
    const { el, renderer } = this;
    updateHostClass(el.nativeElement, renderer, {
      [`cell`]: true,
      [`cell__${this.type}`]: this.type != null,
      [`cell__${this.size}`]: this.size != null,
      [`cell__has-unit`]: this._unit,
      [`cell__has-default`]: this.showDefault
    });
    el.nativeElement.dataset.type = this.safeOpt.type;
  }

  ngOnChanges(changes: { [p in keyof CellComponent]?: SimpleChange }): void {
    if (changes.value) {
      this.destroy$?.unsubscribe();
      this.destroy$ = this.srv.get(this.value, this.options).subscribe(res => {
        this.res = res;
        this.showDefault = this.value == this.defaultCondition;
        this._text = res.result.text ?? '';
        this._unit = res.result.unit;
        this.cdr.detectChanges();
        this.setClass();
      });
    } else {
      this.setClass();
    }
  }

  _link(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    const link = this.safeOpt.link;
    const url = link?.url;
    if (url == null) return;

    if (url.startsWith('/')) {
      this.router.navigateByUrl(url);
    } else {
      (this.win as Window).open(url, link?.target);
    }
  }

  _showImg(img: string): void {
    const config = this.safeOpt.img;
    if (config == null || config.big === false) return;

    let idx = -1;
    const list = (this._text as string[]).map((p, index) => {
      if (idx === -1 && p === img) idx = index;
      return typeof config.big === 'function' ? config.big(p) : p;
    });
    this.imgSrv
      .preview(
        list.map(p => ({ src: p } as NzImage)),
        config.previewOptions
      )
      .switchTo(idx);
  }

  ngOnDestroy(): void {
    this.destroy$?.unsubscribe();
  }
}
