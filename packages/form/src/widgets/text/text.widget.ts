import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-text',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    {{ value || ui.defaultText || '-' }}
  </sf-item-wrap>
  `,
})
export class TextWidget extends ControlWidget implements OnInit {
  ngOnInit(): void {
    this.ui._required = false;
  }
}
