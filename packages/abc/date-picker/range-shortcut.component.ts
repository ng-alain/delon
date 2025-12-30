import { Component, TemplateRef, ViewChild } from '@angular/core';

import { AlainDateRangePickerShortcutItem } from '@delon/util/config';

@Component({
  selector: '',
  template: `
    <ng-template #tpl>
      @for (i of list; track $index) {
        <a (click)="click(i)" [innerHTML]="i._text" [class.ml-sm]="!$first"></a>
      }
    </ng-template>
  `
})
export class RangePickerShortcutTplComponent {
  @ViewChild('tpl', { static: true })
  readonly tpl!: TemplateRef<void>;

  list: AlainDateRangePickerShortcutItem[] = [];

  click(_: AlainDateRangePickerShortcutItem): void {}
}
