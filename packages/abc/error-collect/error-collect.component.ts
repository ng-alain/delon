import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  InputSignalWithTransform,
  OnInit,
  ViewEncapsulation,
  inject,
  input,
  numberAttribute,
  signal
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

import { AlainConfigService } from '@delon/util/config';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'error-collect, [error-collect]',
  exportAs: 'errorCollect',
  template: `
    <nz-icon nzType="exclamation-circle" />
    <span class="error-collect__count">{{ count() }}</span>
  `,
  host: {
    '[class.error-collect]': 'true',
    '[class.error-collect-rtl]': `dir() === 'rtl'`,
    '[class.d-none]': '_hiden()',
    '(click)': '_click()'
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzIconDirective]
})
export class ErrorCollectComponent implements OnInit {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly doc = inject(DOCUMENT);
  private readonly platform = inject(Platform);
  private readonly destroy$ = inject(DestroyRef);
  private formEl: HTMLFormElement | null = null;

  _hiden = signal(true);
  count = signal(0);
  dir = toSignal(inject(Directionality).change);

  readonly freq: InputSignalWithTransform<number, unknown> = input(0, { transform: numberAttribute });
  readonly offsetTop: InputSignalWithTransform<number, unknown> = input(0, { transform: numberAttribute });

  constructor(configSrv: AlainConfigService) {
    configSrv.attach(this, 'errorCollect', { freq: 250, offsetTop: 65 + 64 + 8 * 2 });
  }

  private get errEls(): NodeListOf<HTMLElement> {
    return this.formEl!.querySelectorAll('.ant-form-item-has-error');
  }

  private update(): void {
    const count = this.errEls.length;
    if (count === this.count()) return;
    this.count.set(count);
    this._hiden.set(count === 0);
  }

  _click(): boolean {
    if (this.count() === 0) return false;
    // nz-form-control
    const els = this.errEls;
    const formItemEl = this.findParent(els[0], '[nz-form-control]') || els[0];
    formItemEl.scrollIntoView(true);
    // fix header height
    this.doc.documentElement.scrollTop -= this.offsetTop();
    return true;
  }

  private findParent(el: HTMLElement, selector: string): HTMLFormElement | null {
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
    if (!this.platform.isBrowser) return;

    this.formEl = this.findParent(this.el, 'form');
    if (this.formEl === null) throw new Error('No found form element');

    interval(this.freq())
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(() => this.update());

    this.update();
  }
}
