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

  @Input() title: string | TemplateRef<void>;
  @Input() description: string | TemplateRef<void>;
  @Input() extra: string | TemplateRef<void>;
}
