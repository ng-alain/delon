import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ControlWidget } from '../../widget';
import { getData } from '../../utils';
import { SFSchemaEnum } from '../../schema';

@Component({
    selector: 'sf-transfer',
    template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

        <nz-transfer
            [nzDataSource]="list"
            [nzTitles]="i.titles"
            [nzOperations]="i.operations"
            [nzListStyle]="ui.listStyle"
            [nzItemUnit]="i.itemUnit"
            [nzItemsUnit]="i.itemsUnit"
            [nzShowSearch]="ui.showSearch"
            [nzFilterOption]="ui.filterOption"
            [nzSearchPlaceholder]="ui.searchPlaceholder"
            [nzNotFoundContent]="ui.notFoundContent"
            [nzCanMove]="_canMove"
            (nzChange)="_change($event)"
            (nzSearchChange)="_searchChange($event)"
            (nzSelectChange)="_selectChange($event)">
        </nz-transfer>

    </sf-item-wrap>
    `,
    preserveWhitespaces: false
})
export class TransferWidget extends ControlWidget implements OnInit {

    list: any[] = [];
    i: any;
    private _data: any[] = [];

    ngOnInit(): void {
        this.i = {
            titles: this.ui.titles || ['', ''],
            operations: this.ui.operations || ['', ''],
            itemUnit: this.ui.itemUnit || '项',
            itemsUnit: this.ui.itemsUnit || '项'
        };
    }

    reset(value: any) {
        getData(this.schema, this.ui, null).subscribe(list => {
            let formData = this.formProperty.formData;
            if (!Array.isArray(formData)) formData = [formData];
            list.forEach((item: SFSchemaEnum) => {
                if (~(formData as any[]).indexOf(item.value)) item.direction = 'right';
            });
            this.list = list;
            this._data = list.filter(w => w.direction === 'right');
            this.notify();
            this.detectChanges();
        });
    }

    private notify() {
        this.formProperty.setValue(this._data.map(i => i.value), false);
    }

    _canMove = (arg: any): Observable<any[]> => {
        return this.ui.canMove ? this.ui.canMove(arg) : of(arg.list);
    }

    _change(options: any) {
        if (options.to === 'right') {
            this._data = this._data.concat(...options.list);
        } else {
            this._data = this._data.filter(w => options.list.indexOf(w) === -1);
        }
        if (this.ui.change) this.ui.change(options);
        this.notify();
    }

    _searchChange(options: any) {
        if (this.ui.searchChange) this.ui.searchChange(options);
    }

    _selectChange(options: any) {
        if (this.ui.selectChange) this.ui.selectChange(options);
        this.cd.detectChanges();
    }
}
