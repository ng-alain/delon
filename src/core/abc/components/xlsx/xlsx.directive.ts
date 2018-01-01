import { Directive, OnInit, HostListener, Input } from '@angular/core';
import { XlsxService } from './xlsx.service';
import { XlsxExportOptions } from './interface';

@Directive({ selector: 'xlsx' })
export class XlsxDirective implements OnInit {

    @Input('xlsx') data: XlsxExportOptions;

    constructor(private srv: XlsxService) {}

    ngOnInit(): void {
    }

    @HostListener('click')
    _click() {
        if (!this.data) throw new Error(`muse be specified options`);
        this.srv.export(this.data);
    }

}
