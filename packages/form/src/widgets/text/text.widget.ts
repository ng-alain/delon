import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import { SFTextWidgetSchema } from './schema';

@Component({
  selector: 'sf-text',
  templateUrl: './text.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class TextWidget extends ControlUIWidget<SFTextWidgetSchema> implements OnInit {
  ngOnInit(): void {
    this.ui._required = false;
  }
}
