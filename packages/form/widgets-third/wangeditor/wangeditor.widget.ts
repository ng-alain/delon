import { Component } from '@angular/core';
import { ControlWidget } from '@delon/form';

@Component({
  selector: 'sf-wangeditor',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <wangEditor
      [ngModel]="value"
      [config]="ui.config"
      (ngModelChange)="change($event)">
    </wangEditor>
  </sf-item-wrap>
  `,
  preserveWhitespaces: false,
  styles: [`:host wangeditor { line-height:normal; }`],
})
// tslint:disable-next-line:component-class-suffix
export class WangEditorWidget extends ControlWidget {
  static readonly KEY = 'wangeditor';

  change(value: string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  }
}
