import { Directive, inject, input } from '@angular/core';

import { XlsxService } from './xlsx.service';
import { XlsxExportOptions } from './xlsx.types';

@Directive({
  selector: '[xlsx]',
  exportAs: 'xlsx',
  host: {
    '(click)': '_click()'
  }
})
export class XlsxDirective {
  private readonly srv = inject(XlsxService);

  readonly xlsx = input.required<XlsxExportOptions>();

  protected _click(): void {
    this.srv.export(this.xlsx());
  }
}
