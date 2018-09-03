import {
  Component,
  OnInit,
  Input,
  HostBinding,
  OnDestroy,
  ElementRef,
  HostListener,
  Inject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { toNumber } from '@delon/util';
import { NaErrorCollectConfig } from './error-collect.config';

/**
 * 错误消息采集器
 * PS：虽然此法并不好看，但对响应式表单&模板表单有很好的效果。
 */
@Component({
  selector: 'error-collect, [error-collect]',
  template: `
  <i class="anticon anticon-exclamation-circle"></i>
  <span class="pl-sm">{{count}}</span>`,
  host: { '[class.error-collect]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class NaErrorCollectComponent implements OnInit, OnDestroy {
  private $time = null;
  private formEl: HTMLFormElement;

  @Input()
  get freq() {
    return this._freq;
  }
  set freq(value: any) {
    this._freq = toNumber(value);
  }
  private _freq = 500;

  @Input()
  get offsetTop() {
    return this._offsetTop;
  }
  set offsetTop(value: any) {
    this._offsetTop = toNumber(value);
  }
  private _offsetTop = 65 + 64 + 8 * 2;

  @HostBinding('class.d-none')
  _hiden = true;

  count = 0;

  constructor(
    cog: NaErrorCollectConfig,
    private el: ElementRef,
    private cd: ChangeDetectorRef,
    @Inject(DOCUMENT) private doc: any,
  ) {
    Object.assign(this, cog);
  }

  private get errEls() {
    return this.formEl.querySelectorAll('.has-error');
  }

  private update() {
    const count = this.errEls.length;
    if (count === this.count) return;
    this.count = count;
    this._hiden = count === 0;
    this.cd.markForCheck();
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

  private findParent(el: any, selector: string) {
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
    if (this.formEl === null) throw new Error('未找到有效 form 元素');
    this.install();
  }

  ngOnDestroy() {
    this.uninstall();
  }
}
