import { Component } from '@angular/core';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-tag',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <nz-tag
      *ngFor="let i of data"
      nzMode="checkable"
      [nzChecked]="i.checked"
      (nzAfterClose)="_afterClose()"
      (nzOnClose)="_close($event)"
      (nzCheckedChange)="onChange(i)">
      {{i.label}}
    </nz-tag>

  </sf-item-wrap>
  `,
})
export class TagWidget extends ControlWidget {
  data: SFSchemaEnum[];

  reset(value: SFValue) {
    getData(this.schema, this.ui, this.formProperty.formData).subscribe(
      list => {
        this.data = list;
        this.detectChanges();
      },
    );
  }

  onChange(item: SFSchemaEnum) {
    item.checked = !item.checked;
    this.updateValue();
    if (this.ui.checkedChange) this.ui.checkedChange(item.checked);
  }

  _afterClose() {
    if (this.ui.afterClose) this.ui.afterClose();
  }

  _close(e: MouseEvent) {
    if (this.ui.onClose) this.ui.onClose(e);
  }

  private updateValue() {
    this.formProperty.setValue(
      this.data.filter(w => w.checked).map(i => i.value),
      false,
    );
  }
}
