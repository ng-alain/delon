import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import { getData } from '../../utils';

@Component({
    selector: 'sf-radio',
    template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

        <nz-radio-group
            [nzDisabled]="disabled"
            [nzSize]="ui.size"
            [nzName]="id"
            [ngModel]="value"
            (ngModelChange)="setValue($event)">
            <ng-container *ngIf="styleType">
                <label *ngFor="let option of data"
                    nz-radio
                    [nzValue]="option.value"
                    [nzDisabled]="option.disabled">
                    <span [innerHTML]="option.label"></span>
                </label>
            </ng-container>
            <ng-container *ngIf="!styleType">
                <label *ngFor="let option of data"
                    nz-radio-button
                    [nzValue]="option.value"
                    [nzDisabled]="option.disabled">
                    <span [innerHTML]="option.label"></span>
                </label>
            </ng-container>
        </nz-radio-group>

    </sf-item-wrap>
    `,
    preserveWhitespaces: false
})
export class RadioWidget extends ControlWidget {
    data: any[] = [];
    styleType: boolean;

    reset(value: any) {
        this.styleType = (this.ui.styleType || 'default') === 'default';
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => this.data = list);
    }

}
