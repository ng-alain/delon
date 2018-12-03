import { Component } from '@angular/core';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-checkbox',
  templateUrl: './checkbox.widget.html',
})
export class CheckboxWidget extends ControlWidget {
  data: SFSchemaEnum[] = [];
  allChecked = false;
  indeterminate = false;
  grid_span: number;
  labelTitle = ``;
  inited = false;

  get l() {
    return this.formProperty.root.widget.sfComp.locale;
  }

  reset(value: SFValue) {
    this.inited = false;
    getData(this.schema, this.ui, this.formProperty.formData).subscribe(
      list => {
        this.data = list;
        this.allChecked = false;
        this.indeterminate = false;
        this.labelTitle = list.length === 0 ? '' : this.schema.title;
        this.grid_span = this.ui.span && this.ui.span > 0 ? this.ui.span : 0;

        this.updateAllChecked();
        this.inited = true;
        this.cd.detectChanges();
      },
    );
  }

  _setValue(value: SFValue) {
    this.setValue(value);
    this.detectChanges();
    this.notifyChange(value);
  }

  notifySet() {
    const checkList = this.data.filter(w => w.checked);
    this.updateAllChecked().setValue(checkList.map(item => item.value));
    this.notifyChange(checkList);
  }

  groupInGridChange(values: SFValue[]) {
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
    // issues: https://github.com/NG-ZORRO/ng-zorro-antd/issues/2025
    setTimeout(() => this.detectChanges());
    return this;
  }

  private notifyChange(res: boolean | SFSchemaEnum[]) {
    if (this.ui.change) this.ui.change(res);
  }
}
