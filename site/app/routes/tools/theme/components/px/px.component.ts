import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'theme-px',
    template: `
    <nz-input-number [ngModel]="_val" (ngModelChange)="onChange($event)"
        [nzMin]="min" [nzMax]="max" [nzStep]="step"
        [nzFormatter]="format"></nz-input-number>
    `
})
export class PXComponent {

    _val: number;

    @Input()
    set value(val: string) {
        this._val = +val.replace('px', '');
    }
    get value(): string {
        return this._val + 'px';
    }

    @Output() valueChange = new EventEmitter<string>();

    @Input() step = 2;

    @Input() min = 1;

    @Input() max = 100;

    onChange(val: number) {
        this._val = val;
        this.valueChange.emit(this.value);
    }

    format = value => `${value} px`;
}
