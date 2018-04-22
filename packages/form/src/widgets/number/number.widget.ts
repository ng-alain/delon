import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';

@Component({
    selector: 'sf-number',
    template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
        <nz-input-number
            [ngModel]="value"
            (ngModelChange)="setValue($event)"
            [nzDisabled]="disabled"
            [nzSize]="ui.size"
            [nzMin]="min"
            [nzMax]="max"
            [nzStep]="step"
            [nzFormatter]="formatter"
            [nzParser]="parser"
            [nzPrecision]="ui.precision">
        </nz-input-number>
    </sf-item-wrap>`,
    preserveWhitespaces: false
})
export class NumberWidget extends ControlWidget implements OnInit {
    min: number;
    max: number;
    step: number;
    formatter = (value: any) => value;
    parser = (value: any) => value;

    ngOnInit(): void {
        if (typeof this.schema.minimum !== 'undefined') {
            this.min = this.schema.exclusiveMinimum ? this.schema.minimum + 1 : this.schema.minimum;
        }
        if (typeof this.schema.maximum !== 'undefined') {
            this.max = this.schema.exclusiveMaximum ? this.schema.maximum - 1 : this.schema.maximum;
        }
        this.step = this.schema.multipleOf || 1;
        if (this.schema.type === 'integer') {
            this.min = Math.trunc(this.min);
            this.max = Math.trunc(this.max);
            this.step = Math.trunc(this.step);
        }
        if (this.ui.formatter) this.formatter = this.ui.formatter;
        if (this.ui.parser) this.parser = this.ui.parser;
    }
}
