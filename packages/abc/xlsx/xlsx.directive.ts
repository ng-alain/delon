import { Directive, Input, inject } from '@angular/core';

import { XlsxService } from './xlsx.service';
import { XlsxExportOptions } from './xlsx.types';

@Directive({
  selector: '[xlsx]',
  exportAs: 'xlsx',
  host: {
    '(click)': '_click()'
  },
  standalone: true
})
export class XlsxDirective {
  private readonly srv = inject(XlsxService);

  @Input('xlsx') data!: XlsxExportOptions;

  _click(): void {
    this.srv.export(this.data);
  }
}
