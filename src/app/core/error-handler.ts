import { DOCUMENT } from '@angular/common';
import { ErrorHandler, Inject, Injectable } from '@angular/core';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Injectable()
export class CustomErrorHandler extends ErrorHandler {
  constructor(@Inject(DOCUMENT) private doc: NzSafeAny) {
    super();
  }

  handleError(error: NzSafeAny): void {
    try {
      super.handleError(error);
    } catch (e) {
      this.reportError(e);
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
