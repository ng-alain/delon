import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import { getData } from '../../utils';
import { SFSchemaEnum } from '../../schema';

@Component({
  selector: 'sf-checkbox',
  templateUrl: './checkbox.widget.html',
  preserveWhitespaces: false,
})
export class CheckboxWidget extends ControlWidget {
  data: SFSchemaEnum[] = [];
  allChecked = false;
  indeterminate = false;
  grid_span: number;
  labelTitle = ``;

  reset(value: any) {
    getData(this.schema, this.ui, this.formProperty.formData).subscribe(
      list => {
        this.data = list;
        this.allChecked = false;
        this.indeterminate = false;
        this.labelTitle = list.length === 0 ? '' : this.schema.title;
        this.grid_span = this.ui.span && this.ui.span > 0 ? this.ui.span : 0;

        this.updateAllChecked();
      },
    );
  }

  _setValue(value: any) {
    this.setValue(value);
    this.detectChanges();
    this.notifyChange(value);
  }

  notifySet() {
    const checkList = this.data.filter(w => w.checked);
    this.updateAllChecked().setValue(checkList.map(item => item.value));
    this.notifyChange(checkList);
  }

  groupInGridChange(values: any[]) {
    this.data.forEach(
      item => (item.checked = values.indexOf(item.value) !== -1),
    );
    this.notifySet();
  }

  onAllChecked(e: Event) {
    e.stopPropagation();
    this.data.forEach(item => (item.checked = this.allChecked));
    this.notifySet();
  }

  updateAllChecked(): this {
    if (this.data.every(item => item.checked === false)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.data.every(item => item.checked === true)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
    this.detectChanges();
    return this;
  }

  private notifyChange(res: boolean | SFSchemaEnum[]) {
    if (this.ui.change) this.ui.change(res);
  }
}
