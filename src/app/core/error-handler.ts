import { DOCUMENT } from '@angular/common';
import { ErrorHandler, Injectable, inject } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Injectable()
export class CustomErrorHandler extends ErrorHandler {
  private readonly doc = inject(DOCUMENT);

  handleError(error: NzSafeAny): void {
    try {
      super.handleError(error);
    } catch (e) {
      this.reportError(e as Error);
    }
    this.reportError(error);
  }

  private reportError(error: string | Error): void {
    const win = this.doc.defaultView as NzSafeAny;
    if (win && win.onerror) {
      if (typeof error === 'string') {
        win.onerror(error);
      } else {
        win.onerror(error.message, undefined, undefined, undefined, error);
      }
    }
  }
}
