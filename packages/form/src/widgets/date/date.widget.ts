import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';
import * as format from 'date-fns/format';

const DATEFORMAT = {
    'date-time': `YYYY-MM-DDTHH:mm:ssZ`
};

const DEFAULTFORMAT = 'YYYY-MM-DD HH:mm:ss';

@Component({
    selector: 'sf-date',
    template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

        <input nz-input
            [attr.id]="id"
            [disabled]="disabled"
            [nzSize]="ui.size"
            [value]="displayValue"
            (input)="_change($event.target?.value)"
            [attr.type]="type"
            [attr.placeholder]="ui.placeholder"
            autocomplete="off">

    </sf-item-wrap>
    `,
    preserveWhitespaces: false
})
export class DateWidget extends ControlWidget implements OnInit {

    type: string;
    displayValue: string;
    format: string;

    ngOnInit(): void {
        this.type = this.schema.format === 'date-time' ? 'datetime-local' : 'date';
        this.format = !this.ui.format && this.schema.format ? DATEFORMAT[this.schema.format] || 'YYYY-MM-DD' : this.ui.format;
    }

    reset(value: any) {
        this.formatDisplay(value);
    }

    private formatData(value: string, formatString: string) {
        return format(value, formatString, { locale: (window as any).__locale__ });
    }

    private formatDisplay(value: any) {
        // TODO：HTML 原生日期组件无法按 `displayFormat` 格式，暂时停用以下代码
        // this.displayValue = this.formatData(value, this.ui.displayFormat || DEFAULTFORMAT);
    }

    _change(value: string) {
        this.formatDisplay(value);
        this.setValue(this.formatData(value, this.format || DEFAULTFORMAT));
    }
}
