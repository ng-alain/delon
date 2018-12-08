import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-textarea',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

    <textarea nz-input
      [attr.id]="id"
      [disabled]="disabled"
      [attr.disabled]="disabled"
      [nzSize]="ui.size"
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [attr.maxLength]="schema.maxLength || null"
      [attr.placeholder]="ui.placeholder"
      [nzAutosize]="autosize">
    </textarea>

  </sf-item-wrap>`,
})
export class TextareaWidget extends ControlWidget implements OnInit {
  // tslint:disable-next-line:no-any
  autosize: any = true;

  ngOnInit(): void {
    if (this.ui.autosize != null) {
      this.autosize = this.ui.autosize;
    }
  }
}
