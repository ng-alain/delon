import { Directive, Input, TemplateRef, OnInit } from '@angular/core';
import { SimpleTableComponent } from './simple-table.component';

@Directive({
    selector: '[st-row]'
})
export class SimpleTableRowDirective implements OnInit {

    @Input('st-row') id: string;

    constructor(public templateRef: TemplateRef<any>, private table: SimpleTableComponent) {}

    ngOnInit(): void {
        this.table.addRow(this);
    }
}
