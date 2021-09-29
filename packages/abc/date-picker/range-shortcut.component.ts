import { Component, TemplateRef, ViewChild } from '@angular/core';

import { AlainDateRangePickerShortcutItem } from '@delon/util/config';

@Component({
  selector: '',
  template: `
    <ng-template #tpl>
      <a
        *ngFor="let i of list; let first = first"
        (click)="click(i)"
        [innerHTML]="i._text"
        [ngClass]="{ 'ml-sm': !first }"
      ></a>
    </ng-template>
  `
})
export class RangePickerShortcutTplComponent {
  @ViewChild('tpl', { static: true })
  tpl!: TemplateRef<void>;

  list: AlainDateRangePickerShortcutItem[] = [];

  click(_: AlainDateRangePickerShortcutItem): void {}
}
