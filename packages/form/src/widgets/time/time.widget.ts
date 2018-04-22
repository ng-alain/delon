import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';
import * as format from 'date-fns/format';

const DEFAULTFORMAT = 'HH:mm:ss';

@Component({
    selector: 'sf-time',
    template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

        <input nz-input
            [attr.id]="id"
            [disabled]="disabled"
            [nzSize]="ui.size"
            [value]="displayValue"
            (input)="_change($event.target?.value)"
            type="time"
            [attr.placeholder]="ui.placeholder"
            autocomplete="off">

    </sf-item-wrap>
    `,
    preserveWhitespaces: false
})
export class TimeWidget extends ControlWidget implements OnInit {

    displayValue: string;

    ngOnInit(): void {
    }

    reset(value: any) {
        this.formatDisplay(value);
    }

    _change(value: string) {
        value = `1970-01-01T${value}`;
        this.formatDisplay(value);
        this.setValue(this.formatData(value, this.ui.format || DEFAULTFORMAT));
    }

    private formatData(value: string, formatString: string) {
        return format(value, formatString, { locale: (window as any).__locale__ });
    }

    private formatDisplay(value: any) {
        // TODO：HTML 原生日期组件无法按 `displayFormat` 格式，暂时停用以下代码
        // this.displayValue = this.formatData(value, this.ui.displayFormat || DEFAULTFORMAT);
    }
}
