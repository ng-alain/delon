import { Directive, Input } from '@angular/core';

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
  @Input('xlsx') data!: XlsxExportOptions;

  constructor(private srv: XlsxService) {}

  _click(): void {
    this.srv.export(this.data);
  }
}
