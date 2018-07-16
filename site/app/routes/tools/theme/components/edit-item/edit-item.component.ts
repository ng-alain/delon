import { Component, Input } from '@angular/core';
import { EditorItem } from '../../interface';

@Component({
    selector: 'edit-item',
    templateUrl: './edit-item.component.html',
    styleUrls: [ './edit-item.component.less' ]
})
export class EditItemComponent {
    private _data: EditorItem;
    @Input()
    set data(value: EditorItem) {
        this._data = value;
        this.upRel();
    }
    get data() {
        return this._data;
    }


    upRel() {
        if (!this._data.tip) return;
        this._data.rel = this._data.default === this._data.value ? this._data.tip : '';
    }

    tempValue: any;
    editingValue: any;

    edit() {
        this.editingValue = this.data.rel ? this.data.default : this.data.value;
        this.tempValue = this.data.value;
        this.data.revising = true;
    }

    op(type: string) {
        switch (type) {
            case 'cancel':
                this.data.value = this.tempValue;
                break;
            case 'ok':
                this.data.value = this.editingValue;
                break;
            case 'reset':
                this.data.value = this.data.default;
                break;
        }
        this.data.revising = false;
        this.upRel();
    }
}
