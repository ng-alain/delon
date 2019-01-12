import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { InputNumber } from '@delon/util';

import { ErrorCollectConfig } from './error-collect.config';

@Component({
  selector: 'error-collect, [error-collect]',
  template: `
    <i nz-icon type="exclamation-circle"></i>
    <span class="pl-sm">{{ count }}</span>
  `,
  host: { '[class.error-collect]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'errorCollect',
})
export class ErrorCollectComponent implements OnInit, OnDestroy {
  private $time = null;
  private formEl: HTMLFormElement;

  @Input() @InputNumber() freq: number;
  @Input() @InputNumber() offsetTop: number;

  @HostBinding('class.d-none') _hiden = true;

  count = 0;

  constructor(
    cog: ErrorCollectConfig,
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
    // tslint:disable-next-line:no-any
    @Inject(DOCUMENT) private doc: any,
  ) {
    Object.assign(this, { ...new ErrorCollectConfig(), ...cog});
  }

  private get errEls() {
    return this.formEl.querySelectorAll('.has-error');
  }

  private update() {
    const count = this.errEls.length;
    if (count === this.count) return;
    this.count = count;
    this._hiden = count === 0;
    this.cdr.markForCheck();
  }

  @HostListener('click')
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
    clearInterval(this.$time);
  }

  private findParent(el: Element, selector: string) {
    let retEl = null;
    while (el) {
      if (el.querySelector(selector)) {
        retEl = el;
        break;
      }
      el = el.parentElement;
    }
    return retEl;
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
