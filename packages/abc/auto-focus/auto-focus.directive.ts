import { Platform } from '@angular/cdk/platform';
import {
  AfterViewInit,
  DestroyRef,
  Directive,
  ElementRef,
  Input,
  booleanAttribute,
  inject,
  numberAttribute
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';

@Directive({
  selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
  exportAs: 'autoFocus',
  standalone: true
})
export class AutoFocusDirective implements AfterViewInit {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly platform = inject(Platform);
  private readonly destroy$ = inject(DestroyRef);

  @Input({ transform: booleanAttribute }) enabled = true;
  @Input({ transform: numberAttribute }) delay = 300;

  ngAfterViewInit(): void {
    const el = this.el;
    if (!this.platform.isBrowser || !(el instanceof HTMLElement) || !this.enabled) {
      return;
    }
    timer(this.delay)
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(() => el.focus({ preventScroll: false }));
  }
}
