import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';

/**
 * Access to global `window` object
 *
 * 访问全局 `window` 对象
 */
export const WINDOW = new InjectionToken<Window>('WINDOW', {
  factory: () => {
    const { defaultView } = inject(DOCUMENT);
    if (!defaultView) {
      throw new Error('Window is not available');
    }
    return defaultView;
  }
});
