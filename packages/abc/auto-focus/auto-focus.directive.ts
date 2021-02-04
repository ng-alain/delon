import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';
import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util/decorator';

@Directive({
  selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
  exportAs: 'autoFocus',
})
export class AutoFocusDirective implements AfterViewInit {
  static ngAcceptInputType_enabled: BooleanInput;
  static ngAcceptInputType_delay: NumberInput;

  @Input() @InputBoolean() enabled = true;
  @Input() @InputNumber() delay = 300;

  constructor(private el: ElementRef<HTMLElement>, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const el = this.el.nativeElement;
    if (!(el instanceof HTMLElement) || !this.enabled) {
      return;
    }
    setTimeout(() => {
      el.focus({ preventScroll: false });
      this.cdr.markForCheck();
    }, this.delay);
  }
}
