import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ControlUIWidget, DelonFormModule, SFSchemaEnum, SFValue, getData } from '@delon/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';

import type { SFTagWidgetSchema } from './schema';

@Component({
  selector: 'sf-tag',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <ng-template #icon let-i>
      <i
        nz-icon
        [nzType]="i.type"
        [nzTheme]="i.theme"
        [nzTwotoneColor]="i.twotoneColor"
        [nzRotate]="i.rotate"
        [nzIconfont]="i.iconfont"
        [nzSpin]="i.spin"
      ></i>
    </ng-template>
    @for (i of data; track $index) {
    <nz-tag
      [nzMode]="ui.mode || 'checkable'"
      [nzChecked]="i.checked"
      (nzOnClose)="_close($event)"
      (nzCheckedChange)="onChange(i)"
    >
      @if (i.prefixIcon) {
      <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.prefixIcon }" />
      }
      <span>{{ i.label }}</span>
      @if (i.suffixIcon) {
      <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.suffixIcon }" />
      }
    </nz-tag>
    }
  </sf-item-wrap>`,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [FormsModule, DelonFormModule, NzTagModule, NzIconModule]
})
export class TagWidget extends ControlUIWidget<SFTagWidgetSchema> {
  static readonly KEY = 'tag';

  data: SFSchemaEnum[] = [];

  reset(value: SFValue): void {
    getData(this.schema, this.ui, value).subscribe(list => {
      this.data = list;
      this.detectChanges();
    });
  }

  onChange(item: SFSchemaEnum): void {
    item.checked = !item.checked;
    this.updateValue();
    if (this.ui.checkedChange) {
      this.ui.checkedChange(item.checked);
    }
  }

  _close(e: MouseEvent): void {
    if (this.ui.onClose) this.ui.onClose(e);
  }

  private updateValue(): void {
    this.formProperty.setValue(
      this.data.filter(w => w.checked).map(i => i.value),
      false
    );
  }
}
