import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-text',
  templateUrl: './text.widget.html',
})
export class TextWidget extends ControlWidget implements OnInit {
  ngOnInit(): void {
    this.ui._required = false;
  }
}
