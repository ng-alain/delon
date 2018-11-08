import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  host: { '[class.result]': 'true' },
  preserveWhitespaces: false,
})
export class ResultComponent {
  _type = '';
  _icon = '';
  @Input()
  set type(value: string) {
    this._type = value;
    switch (value) {
      case 'success':
        this._icon = 'check-circle';
        break;
      case 'error':
        this._icon = 'close-circle';
        break;
      default:
        this._icon = value;
        break;
    }
  }

  _title = '';
  _titleTpl: TemplateRef<any>;
  @Input()
  set title(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._title = null;
      this._titleTpl = value;
    } else this._title = value;
  }

  _description = '';
  _descriptionTpl: TemplateRef<any>;
  @Input()
  set description(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._description = null;
      this._descriptionTpl = value;
    } else this._description = value;
  }

  _extra = '';
  _extraTpl: TemplateRef<any>;
  @Input()
  set extra(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._extra = null;
      this._extraTpl = value;
    } else this._extra = value;
  }
}
