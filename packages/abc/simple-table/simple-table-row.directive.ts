import { Directive, Input, TemplateRef, OnInit } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SimpleTableComponent } from './simple-table.component';

@Directive({
    selector: '[st-row]'
})
export class SimpleTableRowDirective implements OnInit {

    @Input('st-row') id: string;

    @Input() type: 'title';

    constructor(public templateRef: TemplateRef<any>, private table: SimpleTableComponent) {}

    ngOnInit(): void {
        const col = this.table._columns.find(w => w.render === this.id);
        if (!col) return;
        switch (this.type) {
            case 'title':
                col.__renderTitle = this.templateRef;
                break;
            default:
                col.__render = this.templateRef;
                break;
        }
    }
}
