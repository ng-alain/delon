import { Directive, Input } from '@angular/core';
import { XlsxService } from './xlsx.service';
import { XlsxExportOptions } from './xlsx.types';

@Directive({
  selector: '[xlsx]',
  host: {
    '(click)': '_click()',
  },
  exportAs: 'xlsxDirective',
})
export class XlsxDirective {
  @Input('xlsx') data: XlsxExportOptions;

  constructor(private srv: XlsxService) {}

  _click() {
    this.srv.export(this.data);
  }
}
