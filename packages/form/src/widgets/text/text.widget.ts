import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-text',
  templateUrl: './text.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class TextWidget extends ControlWidget implements OnInit {
  ngOnInit(): void {
    this.ui._required = false;
  }
}
