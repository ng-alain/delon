import { Component, ViewEncapsulation } from '@angular/core';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema/index';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';
import { SFRadioWidgetSchema } from './schema';

@Component({
  selector: 'sf-radio',
  templateUrl: './radio.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class RadioWidget extends ControlUIWidget<SFRadioWidgetSchema> {
  data: SFSchemaEnum[] = [];
  styleType: boolean;

  reset(value: SFValue): void {
    this.styleType = (this.ui.styleType || 'default') === 'default';
    getData(this.schema, this.ui, value).subscribe(list => {
      this.data = list.map(i => {
        i.label = this.dom.bypassSecurityTrustHtml(i.label);
        return i;
      });
      this.detectChanges();
    });
  }

  _setValue(value: SFValue): void {
    this.setValue(value);
    if (this.ui.change) this.ui.change(value);
  }
}
