import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import { SFSchemaEnum } from '../../schema';
import { getData } from '../../utils';

@Component({
    selector: 'sf-tag',
    template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

        <nz-tag
            *ngFor="let i of data"
            nzMode="checkable"
            [nzChecked]="i.checked"
            (nzCheckedChange)="onChange(i)">
            {{i.label}}
        </nz-tag>

    </sf-item-wrap>
    `,
    preserveWhitespaces: false
})
export class TagWidget extends ControlWidget {

    data: SFSchemaEnum[];

    reset(value: any) {
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }

    onChange(item: SFSchemaEnum) {
        item.checked = !item.checked;
        this.updateValue();
    }

    private updateValue() {
        this.formProperty.setValue(this.data.filter(w => w.checked).map(i => i.value), false);
    }
}
