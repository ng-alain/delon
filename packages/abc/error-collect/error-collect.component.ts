import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { InputNumber } from '@delon/util';

import { ErrorCollectConfig } from './error-collect.config';

@Component({
  selector: 'error-collect, [error-collect]',
  exportAs: 'errorCollect',
  template: `
    <i nz-icon nzType="exclamation-circle"></i>
    <span class="pl-sm">{{ count }}</span>
  `,
  host: {
    '[class.error-collect]': 'true',
    '[class.d-none]': '_hiden',
    '(click)': '_click()',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ErrorCollectComponent implements OnInit, OnDestroy {
  private $time: any | null = null;
  private formEl: HTMLFormElement | null;

  @Input() @InputNumber() freq: number;
  @Input() @InputNumber() offsetTop: number;

  _hiden = true;

  count = 0;

  constructor(
    cog: ErrorCollectConfig,
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private doc: any,
  ) {
    Object.assign(this, { ...new ErrorCollectConfig(), ...cog });
  }

  private get errEls() {
    return this.formEl!.querySelectorAll('.has-error');
  }

  private update() {
    const count = this.errEls.length;
    if (count === this.count) return;
    this.count = count;
    this._hiden = count === 0;
    this.cdr.markForCheck();
  }

  _click() {
    if (this.count === 0) return false;
    // nz-form-control
    const els = this.errEls;
    const formItemEl = this.findParent(els[0], '[nz-form-control]') || els[0];
    formItemEl.scrollIntoView(true);
    // fix header height
    this.doc.documentElement.scrollTop -= this.offsetTop;
  }

  private install() {
    this.uninstall();
    this.$time = setInterval(() => this.update(), this.freq);
    this.update();
  }

  private uninstall() {
    clearInterval(this.$time!);
  }

  private findParent(el: Element, selector: string) {
    let retEl: HTMLElement | null = null;
    while (el) {
      if (el.querySelector(selector)) {
        retEl = el as HTMLElement;
        break;
      }
      el = el.parentElement as HTMLElement;
    }
    return retEl as HTMLFormElement | null;
  }

  ngOnInit() {
    this.formEl = this.findParent(this.el.nativeElement, 'form');
    if (this.formEl === null) throw new Error('No found form element');
    this.install();
  }

  ngOnDestroy() {
    this.uninstall();
  }
}
