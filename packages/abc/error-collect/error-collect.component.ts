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
import { AlainConfigService, AlainErrorCollectConfig } from '@delon/config';
import { InputNumber } from '@delon/util';

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

  constructor(private el: ElementRef, private cdr: ChangeDetectorRef, @Inject(DOCUMENT) private doc: any, configSrv: AlainConfigService) {
    configSrv.attach<AlainErrorCollectConfig, 'errorCollect'>(this, 'errorCollect', { freq: 500, offsetTop: 65 + 64 + 8 * 2 });
  }

  private get errEls(): NodeListOf<HTMLElement> {
    return this.formEl!.querySelectorAll('.ant-form-item-has-error');
  }

  private update(): void {
    const count = this.errEls.length;
    if (count === this.count) return;
    this.count = count;
    this._hiden = count === 0;
    this.cdr.markForCheck();
  }

  _click(): boolean {
    if (this.count === 0) return false;
    // nz-form-control
    const els = this.errEls;
    const formItemEl = this.findParent(els[0], '[nz-form-control]') || els[0];
    formItemEl.scrollIntoView(true);
    // fix header height
    this.doc.documentElement.scrollTop -= this.offsetTop;
    return true;
  }

  private install(): void {
    this.uninstall();
    this.$time = setInterval(() => this.update(), this.freq);
    this.update();
  }

  private uninstall(): void {
    clearInterval(this.$time!);
  }

  private findParent(el: Element, selector: string): HTMLFormElement | null {
    let retEl: HTMLFormElement | null = null;
    while (el) {
      if (el.querySelector(selector)) {
        retEl = el as HTMLFormElement;
        break;
      }
      el = el.parentElement as HTMLFormElement;
    }
    return retEl;
  }

  ngOnInit(): void {
    this.formEl = this.findParent(this.el.nativeElement, 'form');
    if (this.formEl === null) throw new Error('No found form element');
    this.install();
  }

  ngOnDestroy(): void {
    this.uninstall();
  }
}
