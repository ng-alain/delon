import { Component, ViewEncapsulation } from '@angular/core';

import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';
import { SFCheckboxWidgetSchema } from './schema';

@Component({
  selector: 'sf-checkbox',
  templateUrl: './checkbox.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class CheckboxWidget extends ControlUIWidget<SFCheckboxWidgetSchema> {
  data: SFSchemaEnum[] = [];
  allChecked = false;
  indeterminate = false;
  grid_span: number;
  labelTitle: string = ``;
  inited = false;

  reset(value: SFValue): void {
    this.inited = false;
    getData(this.schema, this.ui, value).subscribe(list => {
      this.data = list;
      this.allChecked = false;
      this.indeterminate = false;
      this.labelTitle = list.length === 0 ? '' : (this.schema.title as string);
      const { span } = this.ui;
      this.grid_span = span && span > 0 ? span : 0;

      this.updateAllChecked();
      this.inited = true;
      this.detectChanges();
    });
  }

  _setValue(value: SFValue): void {
    this.setValue(value);
    this.detectChanges();
    this.notifyChange(value);
  }

  notifySet(): void {
    const checkList = this.data.filter(w => w.checked);
    this.updateAllChecked().setValue(checkList.map(item => item.value));
    this.notifyChange(checkList);
  }

  groupInGridChange(values: SFValue[]): void {
    this.data.forEach(item => (item.checked = values.indexOf(item.value) !== -1));
    this.notifySet();
  }

  onAllChecked(): void {
    this.data.forEach(item => (item.checked = this.allChecked));
    this.notifySet();
  }

  updateAllChecked(): this {
    if (this.data.every(item => item.checked !== true)) {
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

  private notifyChange(res: boolean | SFSchemaEnum[]): void {
    if (this.ui.change) this.ui.change(res);
  }
}
