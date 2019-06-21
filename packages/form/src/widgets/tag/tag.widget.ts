import { Component, ViewEncapsulation } from '@angular/core';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';
import { SFTagWidgetSchema } from './schema';

@Component({
  selector: 'sf-tag',
  templateUrl: './tag.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class TagWidget extends ControlUIWidget<SFTagWidgetSchema> {
  data: SFSchemaEnum[];

  reset(value: SFValue) {
    getData(this.schema, this.ui, value).subscribe(list => {
      this.data = list;
      this.detectChanges();
    });
  }

  onChange(item: SFSchemaEnum) {
    item.checked = !item.checked;
    this.updateValue();
    if (this.ui.checkedChange) {
      this.ui.checkedChange(item.checked);
    }
  }

  _afterClose() {
    if (this.ui.afterClose) this.ui.afterClose();
  }

  _close(e: MouseEvent) {
    if (this.ui.onClose) this.ui.onClose(e);
  }

  private updateValue() {
    this.formProperty.setValue(this.data.filter(w => w.checked).map(i => i.value), false);
  }
}
