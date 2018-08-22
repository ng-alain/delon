import { Directive, HostListener, Input } from '@angular/core';
import { NaXlsxService } from './xlsx.service';
import { NaXlsxExportOptions } from './interface';

@Directive({ selector: '[na-xlsx]' })
export class NaXlsxDirective {
  @Input('na-xlsx') data: NaXlsxExportOptions;

  constructor(private srv: NaXlsxService) {}

  @HostListener('click')
  _click() {
    this.srv.export(this.data);
  }
}
