import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Directive({
  selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
  exportAs: 'autoFocus'
})
export class AutoFocusDirective implements AfterViewInit, OnDestroy {
  static ngAcceptInputType_enabled: BooleanInput;
  static ngAcceptInputType_delay: NumberInput;

  private _focusoutTimeout: NzSafeAny;
  @Input() @InputBoolean() enabled = true;
  @Input() @InputNumber() delay = 300;

  constructor(private el: ElementRef<HTMLElement>, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const el = this.el.nativeElement;
    if (!(el instanceof HTMLElement) || !this.enabled) {
      return;
    }
    this._focusoutTimeout = setTimeout(() => {
      el.focus({ preventScroll: false });
      this.cdr.markForCheck();
    }, this.delay);
  }

  ngOnDestroy(): void {
    if (this._focusoutTimeout) {
      clearTimeout(this._focusoutTimeout);
      this._focusoutTimeout = null;
    }
  }
}
