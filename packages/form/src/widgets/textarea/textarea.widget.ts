import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AutoSizeType } from 'ng-zorro-antd/input';
import { ControlUIWidget } from '../../widget';
import { SFTextareaWidgetSchema } from './schema';

@Component({
  selector: 'sf-textarea',
  templateUrl: './textarea.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class TextareaWidget extends ControlUIWidget<SFTextareaWidgetSchema> implements OnInit {
  autosize: boolean | AutoSizeType = true;

  ngOnInit(): void {
    const { autosize } = this.ui;
    if (autosize != null) {
      this.autosize = autosize;
    }
  }
}
