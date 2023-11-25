import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import type { AutoSizeType } from 'ng-zorro-antd/input';

import { SFTextareaWidgetSchema } from './schema';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-textarea',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <ng-template #ipt>
      <textarea
        nz-input
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size!"
        [ngModel]="value"
        (ngModelChange)="change($event)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.placeholder]="ui.placeholder"
        [nzAutosize]="autosize"
        [nzBorderless]="ui.borderless"
        (focus)="focus($event)"
        (blur)="blur($event)"
      >
      </textarea>
    </ng-template>

    @if (ui.maxCharacterCount) {
      <nz-textarea-count
        [nzMaxCharacterCount]="ui.maxCharacterCount"
        [nzComputeCharacterCount]="ui.computeCharacterCount!"
      >
        <textarea
          nz-input
          [attr.id]="id"
          [disabled]="disabled"
          [attr.disabled]="disabled"
          [nzSize]="ui.size!"
          [ngModel]="value"
          (ngModelChange)="change($event)"
          [attr.maxLength]="schema.maxLength || null"
          [attr.placeholder]="ui.placeholder"
          [nzAutosize]="autosize"
          [nzBorderless]="ui.borderless"
          (focus)="focus($event)"
          (blur)="blur($event)"
        >
        </textarea>
      </nz-textarea-count>
    } @else {
      <ng-template [ngTemplateOutlet]="ipt" />
    }
  </sf-item-wrap>`,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class TextareaWidget extends ControlUIWidget<SFTextareaWidgetSchema> implements OnInit {
  autosize: string | boolean | AutoSizeType = true;

  ngOnInit(): void {
    if (this.ui.autosize != null) {
      this.autosize = this.ui.autosize;
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
