import {
  Component,
  Input,
  TemplateRef,
} from '@angular/core';
import { InputBoolean } from '@delon/util';

@Component({
  selector: 'g2-card',
  templateUrl: './card.component.html',
  host: { '[class.g2-card]': 'true' },
})
export class G2CardComponent {

  /** 是否显示边框 */
  @Input() @InputBoolean() bordered = false;

  _avatar = '';
  _avatarTpl: TemplateRef<void>;
  @Input()
  set avatar(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._avatar = null;
      this._avatarTpl = value;
    } else this._avatar = value;
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

  _action = '';
  _actionTpl: TemplateRef<void>;
  @Input()
  set action(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._action = null;
      this._actionTpl = value;
    } else this._action = value;
  }

  @Input() total = '';

  _height = 'auto';
  _orgHeight: number | string;
  @Input()
  set contentHeight(value: number | string) {
    this._orgHeight = value;
    this._height =
      typeof value === 'number' ? (this._height = `${value}px`) : value;
  }

  _footer = '';
  _footerTpl: TemplateRef<void>;
  @Input()
  set footer(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._footer = null;
      this._footerTpl = value;
    } else this._footer = value;
  }

  /** 是否显示Loading */
  @Input() @InputBoolean() loading = false;

}
