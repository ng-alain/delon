import { Component } from '@angular/core';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema/index';
import { getData } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-radio',
  templateUrl: './radio.widget.html',
})
export class RadioWidget extends ControlWidget {
  data: SFSchemaEnum[] = [];
  styleType: boolean;

  reset(value: SFValue) {
    this.styleType = (this.ui.styleType || 'default') === 'default';
    getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => {
      this.data = list;
      this.detectChanges();
    });
  }

  _setValue(value: SFValue) {
    this.setValue(value);
    if (this.ui.change) this.ui.change(value);
  }
}
