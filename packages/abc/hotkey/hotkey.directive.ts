import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, NgZone, OnDestroy, inject } from '@angular/core';

import { install, uninstall } from '@github/hotkey';

@Directive({ selector: '[hotkey]' })
export class HotkeyDirective implements OnDestroy {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly ngZone = inject(NgZone);
  private readonly platform = inject(Platform);

  /**
   * Specify [hotkey format](https://github.com/github/hotkey#hotkey-string-format), you can get the code through [Hotkey Code](https://github.github.com/hotkey/hotkey_mapper.html)
   *
   * 指定[热键格式](https://github.com/github/hotkey#hotkey-string-format)，可以通过 [Hotkey Code](https://github.github.com/hotkey/hotkey_mapper.html) 来获取代码。
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
