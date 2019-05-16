import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-textarea',
  templateUrl: './textarea.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class TextareaWidget extends ControlWidget implements OnInit {
  autosize: any = true;

  ngOnInit(): void {
    if (this.ui.autosize != null) {
      this.autosize = this.ui.autosize;
    }
  }
}
