import { Directive, ElementRef, Input, OnDestroy, inject } from '@angular/core';

import { install, uninstall } from '@github/hotkey';

@Directive({ selector: '[hotkey]' })
export class HotkeyDirective implements OnDestroy {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;

  /**
   * Specify [hotkey format](https://github.com/github/hotkey#hotkey-string-format), you can get the code through [Hotkey Code](https://github.github.com/hotkey/hotkey_mapper.html)
   *
   * 指定[热键格式](https://github.com/github/hotkey#hotkey-string-format)，可以通过 [Hotkey Code](https://github.github.com/hotkey/hotkey_mapper.html) 来获取代码。
   */
  @Input('hotkey')
  set hotkey(key: string) {
    install(this.el, key);
  }

  ngOnDestroy(): void {
    uninstall(this.el);
  }
}
