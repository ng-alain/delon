import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-textarea',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <textarea nz-input
      [attr.id]="id"
      [disabled]="disabled"
      [nzSize]="ui.size"
      [value]="value"
      (input)="setValue($event.target?.value)"
      [attr.maxLength]="schema.maxLength || null"
      [attr.placeholder]="ui.placeholder"
      [nzAutosize]="ui.autosize || true">
    </textarea>

  </sf-item-wrap>`,
  preserveWhitespaces: false,
})
export class TextareaWidget extends ControlWidget {}
