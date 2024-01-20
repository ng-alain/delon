import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, NgZone, OnDestroy, inject } from '@angular/core';

import { install, uninstall } from '@github/hotkey';

@Directive({ selector: '[hotkey]', standalone: true })
export class HotkeyDirective implements OnDestroy {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly ngZone = inject(NgZone);
  private readonly platform = inject(Platform);

  /**
   * Specify [hotkey format](https://github.com/github/hotkey#hotkey-string-format)
   *
   * 指定[热键格式](https://github.com/github/hotkey#hotkey-string-format)
   */
  @Input('hotkey')
  set hotkey(key: string) {
    if (!this.platform.isBrowser) return;

    this.ngZone.runOutsideAngular(() => install(this.el, key));
  }

  ngOnDestroy(): void {
    if (!this.platform.isBrowser) return;

    this.ngZone.runOutsideAngular(() => uninstall(this.el));
  }
}
