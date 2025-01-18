import { Platform } from '@angular/cdk/platform';
import {
  AfterViewInit,
  DestroyRef,
  Directive,
  ElementRef,
  booleanAttribute,
  inject,
  input,
  numberAttribute
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { take, timer } from 'rxjs';

@Directive({
  selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
  exportAs: 'autoFocus'
})
export class AutoFocusDirective implements AfterViewInit {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly platform = inject(Platform);
  private readonly destroy$ = inject(DestroyRef);

  enabled = input<boolean, boolean | string | null | undefined>(true, { transform: booleanAttribute });
  delay = input<number, number | string | null | undefined>(300, { transform: numberAttribute });

  ngAfterViewInit(): void {
    const el = this.el;
    if (!this.platform.isBrowser || !(el instanceof HTMLElement) || !this.enabled()) {
      return;
    }
    timer(this.delay())
      .pipe(takeUntilDestroyed(this.destroy$), take(1))
      .subscribe(() => el.focus({ preventScroll: false }));
  }
}
