import { Direction, Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputNumber } from '@delon/util/decorator';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { interval } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'error-collect, [error-collect]',
  exportAs: 'errorCollect',
  template: `
    <i nz-icon nzType="exclamation-circle"></i>
    <span class="error-collect__count">{{ count }}</span>
  `,
  host: {
    '[class.error-collect]': 'true',
    '[class.error-collect-rtl]': `dir === 'rtl'`,
    '[class.d-none]': '_hiden',
    '(click)': '_click()',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ErrorCollectComponent implements OnInit {
  private formEl: HTMLFormElement | null;

  _hiden = true;
  count = 0;
  dir: Direction = 'ltr';

  @Input() @InputNumber() freq: number;
  @Input() @InputNumber() offsetTop: number;

  constructor(
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private doc: any,
    configSrv: AlainConfigService,
    @Optional() private directionality: Directionality,
  ) {
    configSrv.attach(this, 'errorCollect', { freq: 500, offsetTop: 65 + 64 + 8 * 2 });
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
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(untilDestroyed(this)).subscribe((direction: Direction) => {
      this.dir = direction;
    });
    interval(this.freq)
      .pipe(untilDestroyed(this))
      .subscribe(() => this.update());
    this.update();
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
}
