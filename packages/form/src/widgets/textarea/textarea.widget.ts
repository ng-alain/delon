import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import type { AutoSizeType } from 'ng-zorro-antd/input';

import { ControlUIWidget } from '../../widget';
import { SFTextareaWidgetSchema } from './schema';

@Component({
  selector: 'sf-textarea',
  templateUrl: './textarea.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class TextareaWidget extends ControlUIWidget<SFTextareaWidgetSchema> implements OnInit {
  autosize: string | boolean | AutoSizeType = true;

  ngOnInit(): void {
    if (this.autosize != null) {
      this.autosize = this.autosize;
    }
    if (this.ui.computeCharacterCount == null) {
      this.ui.computeCharacterCount = v => v.length;
    }
  }

  change(val: string): void {
    this.setValue(val);
    if (this.ui.change) this.ui.change(val);
  }

  focus(e: FocusEvent): void {
    if (this.ui.focus) this.ui.focus(e);
  }

  blur(e: FocusEvent): void {
    if (this.ui.blur) this.ui.blur(e);
  }
}
