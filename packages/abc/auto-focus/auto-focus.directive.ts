import {
  Directive,
  ElementRef,
  afterNextRender,
  booleanAttribute,
  inject,
  input,
  numberAttribute,
  output
} from '@angular/core';
import { take, timer } from 'rxjs';

@Directive({
  selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
  exportAs: 'autoFocus'
})
export class AutoFocusDirective {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  readonly enabled = input(true, { transform: booleanAttribute });
  readonly delay = input(25, { transform: numberAttribute });
  readonly focus = output();

  constructor() {
    afterNextRender(() => {
      if (this.enabled()) {
        timer(this.delay())
          .pipe(take(1))
          .subscribe(() => {
            this.el.focus({ preventScroll: false });
            this.focus.emit();
          });
      }
    });
  }
}
