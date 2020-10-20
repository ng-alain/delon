import { SafeHtml } from '@angular/platform-browser';
import { MenuInner } from '@delon/theme';

export interface Nav extends MenuInner {
  _needIcon?: boolean;
  _text?: SafeHtml;
}
