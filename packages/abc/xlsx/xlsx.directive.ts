import { Directive, HostListener, Input } from '@angular/core';
import { XlsxService } from './xlsx.service';
import { XlsxExportOptions } from './xlsx.types';

@Directive({ selector: '[xlsx]' })
export class XlsxDirective {
  @Input('xlsx') data: XlsxExportOptions;

  constructor(private srv: XlsxService) {}

  @HostListener('click')
  _click() {
    this.srv.export(this.data);
  }
}
