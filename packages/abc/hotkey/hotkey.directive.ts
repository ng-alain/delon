import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, NgZone, OnDestroy } from '@angular/core';

import { install, uninstall } from '@github/hotkey';

@Directive({ selector: '[hotkey]', standalone: true })
export class HotkeyDirective implements OnDestroy {
  /**
   * Specify [hotkey format](https://github.com/github/hotkey#hotkey-string-format)
   *
   * 指定[热键格式](https://github.com/github/hotkey#hotkey-string-format)
   */
  @Input('hotkey')
  set hotkey(key: string) {
    if (!this.platform.isBrowser) return;

    this.ngZone.runOutsideAngular(() => install(this.el.nativeElement, key));
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private ngZone: NgZone,
    private platform: Platform
  ) {}

  ngOnDestroy(): void {
    if (!this.platform.isBrowser) return;

    this.ngZone.runOutsideAngular(() => uninstall(this.el.nativeElement));
  }
}
