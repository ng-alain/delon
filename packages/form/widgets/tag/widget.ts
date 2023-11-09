import { Component, ViewEncapsulation } from '@angular/core';

import { ControlUIWidget, SFSchemaEnum, SFValue, getData } from '@delon/form';

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
    <nz-tag
      *ngFor="let i of data"
      [nzMode]="ui.mode || 'checkable'"
      [nzChecked]="i.checked"
      (nzOnClose)="_close($event)"
      (nzCheckedChange)="onChange(i)"
    >
      <ng-container *ngIf="i.prefixIcon">
        <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.prefixIcon }" />
      </ng-container>
      <span>{{ i.label }}</span>
      <ng-container *ngIf="i.suffixIcon">
        <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.suffixIcon }" />
      </ng-container>
    </nz-tag>
  </sf-item-wrap>`,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
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
