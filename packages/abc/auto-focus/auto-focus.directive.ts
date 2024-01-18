import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, DestroyRef, Directive, ElementRef, Input, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';

import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util/decorator/convert';

@Directive({
  selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
  exportAs: 'autoFocus',
  standalone: true
})
export class AutoFocusDirective implements AfterViewInit {
  static ngAcceptInputType_enabled: BooleanInput;
  static ngAcceptInputType_delay: NumberInput;
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly platform = inject(Platform);
  private readonly d$ = inject(DestroyRef);

  @Input() @InputBoolean() enabled = true;
  @Input() @InputNumber() delay = 300;

  ngAfterViewInit(): void {
    const el = this.el;
    if (!this.platform.isBrowser || !(el instanceof HTMLElement) || !this.enabled) {
      return;
    }
    timer(this.delay)
      .pipe(takeUntilDestroyed(this.d$))
      .subscribe(() => {
        el.focus({ preventScroll: false });
      });
  }
}
