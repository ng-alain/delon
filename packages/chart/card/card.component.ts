import {
  Component,
  TemplateRef,
  Input,
} from '@angular/core';
import { toBoolean } from '@delon/util';

@Component({
  selector: 'g2-card',
  templateUrl: './card.component.html',
  host: { '[class.g2-card]': 'true' },
})
export class G2CardComponent {

  /** 是否显示边框 */
  @Input()
  get bordered() {
    return this._bordered;
  }
  set bordered(value: any) {
    this._bordered = toBoolean(value);
  }
  private _bordered = false;

  _avatar = '';
  _avatarTpl: TemplateRef<any>;
  @Input()
  set avatar(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._avatar = null;
      this._avatarTpl = value;
    } else this._avatar = value;
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

  _action = '';
  _actionTpl: TemplateRef<any>;
  @Input()
  set action(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._action = null;
      this._actionTpl = value;
    } else this._action = value;
  }

  @Input() total = '';

  _height = 'auto';
  _orgHeight: any;
  @Input()
  set contentHeight(value: number | string) {
    this._orgHeight = value;
    this._height =
      typeof value === 'number' ? (this._height = `${value}px`) : value;
  }

  _footer = '';
  _footerTpl: TemplateRef<any>;
  @Input()
  set footer(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._footer = null;
      this._footerTpl = value;
    } else this._footer = value;
  }

  /** 是否显示Loading */
  @Input()
  get loading() {
    return this._loading;
  }
  set loading(value: any) {
    this._loading = toBoolean(value);
  }
  private _loading = false;

}
