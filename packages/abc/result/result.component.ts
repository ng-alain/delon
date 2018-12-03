import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  host: { '[class.result]': 'true' },
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
  _titleTpl: TemplateRef<void>;
  @Input()
  set title(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._title = null;
      this._titleTpl = value;
    } else this._title = value;
  }

  _description = '';
  _descriptionTpl: TemplateRef<void>;
  @Input()
  set description(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._description = null;
      this._descriptionTpl = value;
    } else this._description = value;
  }

  _extra = '';
  _extraTpl: TemplateRef<void>;
  @Input()
  set extra(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._extra = null;
      this._extraTpl = value;
    } else this._extra = value;
  }
}
