import { DOCUMENT } from '@angular/common';
import { ErrorHandler, Inject, Injectable } from '@angular/core';

@Injectable()
export class CustomErrorHandler extends ErrorHandler {
  constructor(@Inject(DOCUMENT) private doc: any) {
    super();
  }

  handleError(error: any): void {
    try {
      super.handleError(error);
    } catch (e) {
      this.reportError(e);
    }
    this.reportError(error);
  }

  private reportError(error: string | Error): void {
    const win = this.doc.defaultView as any;
    if (win && win.onerror) {
      if (typeof error === 'string') {
        win.onerror(error);
      } else {
        win.onerror(error.message, undefined, undefined, undefined, error);
      }
    }
  }
}
